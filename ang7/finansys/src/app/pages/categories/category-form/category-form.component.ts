import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { switchMap } from 'rxjs/operators'
import toastr from 'toastr'
import { Category } from '../shared/category.model';
import { CategoryService } from '../shared/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit, AfterContentChecked {

  currentAction: string;
  categoryForm: FormGroup;
  pageTitle: string;
  serverErrorMessages: string[] = null;
  submittingForm: boolean = false;
  category: Category = new Category();

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.setCurrentAction();
    this.buildCategoryForm();
    this.loadCategory();
  }

  ngAfterContentChecked() {
    this.setPageTitle()
  }

  submitForm() {
    this.submittingForm = true;

    if (this.currentAction == 'new')
      this.createCategory()
    else //currentAction =='edit'
      this.updateCategory()
  }

  //PRIVATE METHOS
  private setCurrentAction() {
    //pegando a url que ta
    if (this.route.snapshot.url[0].path == 'new') {
      this.currentAction = "new"
    } else {
      this.currentAction = "edit"
    }

  }

  private buildCategoryForm() {
    this.categoryForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      description: [null]
    });
  }

  private loadCategory() {

    if (this.currentAction == 'edit') {
      this.route.paramMap.pipe(
        switchMap(params => this.categoryService.getById(+params.get("id")))
      )
        .subscribe(
          (category) => {
            this.category = category;
            this.categoryForm.patchValue(this.category) //binds loaded category data to CategoryForm
          },
          (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
        )
    }
  }

  private setPageTitle() {
    if (this.currentAction == 'new')
      this.pageTitle = 'Cadastro de Nova Categoria'
    else {
      const categoryName = this.category.name || ""
      this.pageTitle = 'Editando Categoria: ' + categoryName;
    }

  }

  private createCategory() {
    const category: Category = Object.assign(new Category(), this.categoryForm.value); //criando categoria nova

    this.categoryService.create(category)
      .subscribe(
        category => this.actionsForSuccess(category),
        err => this.actionForError(err)
      )
  }

  private updateCategory() {
    const category: Category = Object.assign(new Category(), this.categoryForm.value);

    this.categoryService.update(category)
      .subscribe(
        category => this.actionsForSuccess(category),
        err => this.actionForError(err)
      )
      
  }

  private actionsForSuccess(category: Category) {
    toastr.success("Solicitação processada com sucesso!")

    //nomedosite.com/categories/new
    //nomedosite.com/categories/
    //nomedosite.com/categories/:id/edit

    //skipLocationChange =>  nao armazena no historico
    //redirect/reload component page
    this.router.navigateByUrl("categories", { skipLocationChange: true }).then(
      () => this.router.navigate(['categories', category.id, 'edit'])
    )
  }

  private actionForError(err) {
    toastr.error("Ocorreu um erro ao processar a sua solicitação!")

    this.submittingForm = false;

    if (err.status == 422) //recurso nao processado com sucesso
      this.serverErrorMessages = JSON.parse(err._body).erros; //back de rails vem assim
    //ex.: ['nome ja existe','o email nao pode ficar em branco']
    else
      this.serverErrorMessages = ['Falha na comunicação com o servidor. Por favor tente mais tarde.']

  }

}

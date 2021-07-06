import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service'
import { User } from '../user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  listUser!: User[];
  form!: FormGroup;
  loading = false;
  submitted = false;
  errorsBE = false;
  check: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private registerService: RegisterService
  ) { }

  ngOnInit() {
    this.listUser = this.registerService.get()
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  hdCheck() {
    this.check = !this.check
  }


  onSubmit() {
    this.submitted = true;

    if (this.form?.invalid) return

    const { username, password } = this.form.value

    let isRegister = this.listUser.find(user => user.username === username && user.password === password)

    if (typeof (isRegister) == "undefined") {
      this.errorsBE = true
      return
    }

    this.loading = true;

    localStorage.setItem("User", JSON.stringify(this.form.value))

    const url = this.route.snapshot.queryParams['returnURL'] || '/?test=true'

    this.router.navigateByUrl(url)
  }
}

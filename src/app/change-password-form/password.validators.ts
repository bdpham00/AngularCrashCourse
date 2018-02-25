import { ValidationErrors } from '@angular/forms/src/directives/validators';
import { AbstractControl } from '@angular/forms';
import { reject } from 'q';

export class PasswordValidators{
    static IsValidPassword(control: AbstractControl): Promise<ValidationErrors|null> {
        return new Promise((resolve) => {
            setTimeout(() => {
                if((control.value as string) === '1234')
                    resolve({ IsValidPassword: true })
                else
                    resolve(null); 
            }, 2000)
        }); 
    }
}
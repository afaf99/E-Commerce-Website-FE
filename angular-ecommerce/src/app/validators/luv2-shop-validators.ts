import { FormControl, ValidationErrors } from "@angular/forms";

export class Luv2ShopValidators {
    //whitespace validators
    static notOnlyWhitespace(control: FormControl): ValidationErrors {

        //check if string only contains whitespace
        if ((control.value != null) && (control.value.trim().length === 0)) {

            //invalid, return error opject
            return { 'notOnlyWhitespace': true };
        }
        else {
            //valid return null
            return null;
        }
    }
}
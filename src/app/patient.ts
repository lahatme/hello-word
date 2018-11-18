export class Patient {
    Name: string;
    Gender: string;
    _Reference_Event_Age_at_event: number;
    Creatinine: number;
    Last_eGFR: number;
    previous_CKD_stage: string;
    Last_CKD_stage: string;
    CKD_Change: string;
    Diabetes_Diagnosis: string;
    hypertension: string;
    Last_systolic_BP_Result_Numeric: number;

    constructor(Name: string, Gender: string, Reference_Event_Age_at_event: number,
                Creatinine: number, Last_eGFR: number, previous_CKD_stage: string, Last_CKD_stage: string,
                CKD_Change: string, Diabetes_Diagnosis: string, hypertension: string, Last_systolic_BP_Result_Numeric: number) {
        this.Name = Name;
        this.Gender = Gender;
        this._Reference_Event_Age_at_event = Reference_Event_Age_at_event;
        this.Creatinine = Creatinine;
        this.Last_eGFR = Last_eGFR;
        this.previous_CKD_stage = previous_CKD_stage;
        this.Last_CKD_stage = Last_CKD_stage;
        this.CKD_Change = CKD_Change;
        this.Diabetes_Diagnosis = Diabetes_Diagnosis;
        this.hypertension = hypertension;
        this.Last_systolic_BP_Result_Numeric = Last_systolic_BP_Result_Numeric;
    }
}

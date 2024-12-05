import './form.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
function Form(){
    let [firstName,changeFirstName] = useState(" ")
    let [lastName,changeLastName] = useState(" ")
    let [pno,changePno] = useState()
    let [firstNameError,changeFirstNameError] = useState()
    let [lastNameError,changeLastNameError] = useState()
    let [pnoError,changePnoError] = useState()

    function ChangeFirstName(event){changeFirstName(event.target.value);console.log(firstName)}
    function ChangeLastName(event){changeLastName(event.target.value);console.log(lastName)}
    function ChangePno(event){changePno(event.target.value)}
    function SubitButton(event){event.preventDefault();Validate();}
    function Validate(){if(firstName.length<4||firstName.length>6){changeFirstNameError("First Name should be of size (4-6)")}else{changeFirstNameError(" ")}
                        if(lastName.length<4||lastName.length>6){changeLastNameError("Last Name must be b/w (4-6)")}else{changeLastNameError()}
                        if(toString(pno).length!=10){changePnoError("hey,Phone number must be of length 10")}
                     }


    return(
        <div className='row'>
            <div className='col-lg-4'></div>
            <div className='col-lg-3 MainDivForm'>
                <h1 className='text-success'>Registration Form</h1>
                <form className='FormDiv'>
                    <div className='row'>
                        <div className='col-lg-5'>
                            <label className='text-danger'>First name</label><br/>
                            <input type='text' placeholder='goutham' onChange={ChangeFirstName}></input>
                        </div>
                        <div className='col-lg-5'>
                            <label className='text-secondary'>Last name</label><br/>
                            <input type='text' placeholder='reddy' onChange={ChangeLastName}></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-5'>
                            <label className='text-primary'>Birth Date</label><br/>
                            <input type='date'></input>
                        </div>
                        <div className='col-lg-5 GenderDiv'>
                            <label className='text-primary' id='gender'>Gender</label><br/>
                            <label>
                                <input type='radio' name='gender'></input>Male
                            </label>
                            <label className='m-2'>
                                <input type='radio' name='gender'></input>Female
                            </label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-5'>
                            <label className='text-primary'>Email</label><br/>
                            <input type='email'></input>
                        </div>
                        <div className='col-lg-5'>
                            <label className='text-primary'>Phone number</label><br/>
                            <input type='number' onChange={ChangePno}></input>
                        </div>
                    </div>
                    <div className='col-lg-11'>
                        <label>Subject</label>
                        <select id='subject'>
                            <option>Maths</option>
                            <option>Physics</option>
                            <option>C Programming</option>
                            <option>Java</option>
                            <option>Web Development</option>
                        </select>
                    </div>
                    <button className='btn btn-success m-5' onClick={SubitButton}>Submit</button>
                </form>
            </div>
            <div className='col-lg-4 Warnings'>
                <h3 className='text-danger'>Warning messages</h3>
                <p>{firstNameError}</p>
                <p>{lastNameError}</p>
                <p>{pnoError}</p>
            </div>
        </div>
    )
}
export default Form;
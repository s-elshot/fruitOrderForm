import React from 'react';
import './App.css';
import {useForm} from "react-hook-form";




function App() {

    // state
    const [strawberryCounter, setStrawberryCounter] = React.useState(0);
    const [bananaCounter, setBananaCounter] = React.useState(0);
    const [appleCounter, setAppleCounter] = React.useState(0);
    const [kiwiCounter, setKiwiCounter] = React.useState(0);
    const { handleSubmit, register, errors, watch} = useForm({mode:"onBlur"});
    const onSubmit = data => {console.log(data,
        `Quantity Strawberries: ${strawberryCounter}`,`Quantity Banana's ${bananaCounter}`,`Quantity apple's ${appleCounter}`,`Quantity kiwi's ${kiwiCounter}`
    )};
    const selectedFrequency = watch('frequency');

    function resetAll(){
        setBananaCounter(0)
        setStrawberryCounter(0)
        setKiwiCounter(0)
        setAppleCounter(0)
    }




    return (
        <div id="container">
            <h2>PRODUCT ORDER</h2>


            <fieldset
                id="strawberries"

            >Strawberries
                <button
                    id="counterButton"
                    type= "submit"
                    onClick={() => strawberryCounter > 0 ? setStrawberryCounter(strawberryCounter -1 ): setStrawberryCounter(0)}
                    name="strawberries"
                >-
                </button>
                {strawberryCounter}
                <button
                    id="counterButton"
                    onClick={() => setStrawberryCounter( strawberryCounter + 1)}
                    name="strawberries"
                >+
                </button>
            </fieldset>

            <fieldset
                id="bananas"
            >Bananas
                <button
                    id="counterButton"
                    type= "submit"
                    onClick={() => bananaCounter > 0 ? setBananaCounter(bananaCounter -1 ): setBananaCounter(0)}
                >-
                </button>
                {bananaCounter}
                <button
                    id="counterButton"
                    onClick={() => setBananaCounter( bananaCounter + 1)}
                >+
                </button>
            </fieldset>

            <fieldset
                id="apples"
            >Apples
                <button
                    id="counterButton"
                    type= "submit"
                    onClick={() => appleCounter > 0 ? setAppleCounter(appleCounter -1 ): setAppleCounter(0)}
                > -
                </button>
                {appleCounter}
                <button
                    id="counterButton"
                    onClick={() => setAppleCounter( appleCounter + 1)}
                >+</button>
            </fieldset>

            <fieldset
                id="kiwis"
            >Kiwi's
                <button
                    id="counterButton"
                    type= "submit"
                    onClick={() => kiwiCounter > 0 ? setKiwiCounter(kiwiCounter -1 ): setKiwiCounter(0)}
                >-
                </button>
                {kiwiCounter}
                <button
                    onClick={() => setKiwiCounter( kiwiCounter + 1)}
                    id="counterButton"
                >+
                </button>
            </fieldset>

            <button
                id="confirmButton"
                type= "reset"
                onClick={resetAll}
            >
                Reset
            </button>




            {/*ASSIGNMENT 2*/}

            <form onSubmit={handleSubmit(onSubmit)}>
                <p>
                    <label htmlFor="firstName">First Name
                        <input
                            type="text"
                            name= "firstName"
                            id="firstName"
                            ref={register(
                                {
                                    required: {
                                        value: true,
                                        message: 'This field must have input',
                                    },
                                    minLength: {
                                        value:2,
                                        message: 'At least 2 characters must be used to define the first name',
                                    },
                                    maxLength: {
                                        value:15,
                                        message: 'At most 15 characters can be used to define the first name',
                                    },
                                }
                            )}
                        />
                    </label>
                    {errors.firstName && <span>{errors.firstName.message}</span>}
                </p>

                <p>
                    <label htmlFor="lastName">Last Name
                        <input type="text"
                               name="lastName"
                               id="lastName"
                               ref={register(
                                   {
                                       required: {
                                           value: true,
                                           message: 'This field must have input',
                                       },
                                       minLength: {
                                           value:2,
                                           message: 'At least 2 characters must be used to define the first name',
                                       },
                                       maxLength: {
                                           value:15,
                                           message: 'At most 15 characters can be used to define the first name',
                                       },
                                   }
                               )}
                        />
                    </label>
                    {errors.lastName && <span>{errors.lastName.message}</span>}
                </p>

                <p>
                    <label htmlFor="age">
                        Age
                        <input
                            type="number"
                            name= "age"
                            id="age"
                            ref={register(
                                {
                                    required: {
                                        value: true,
                                        message: 'This field must have input',
                                    },
                                    min: {
                                        value:18,
                                        message: 'You must be at least 18 to visit this website?',
                                    },
                                    max: {
                                        value:45,
                                        message: 'You arent allowed anymore to visit this website',
                                    },
                                }
                            )}
                        />
                    </label>
                    {errors.age && <span>{errors.age.message}</span>}
                </p>

                <p>
                    <label htmlFor="emailAdress">
                        Email
                        <input
                            type="text"
                            name= "email"
                            id="email"
                            ref={register(
                                {
                                    required: {
                                        value: true,
                                        message: 'This field cant be empty',
                                    },
                                    pattern: {
                                        value:/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                        message: 'Please insert a valid email-adress',
                                    },
                                }
                            )}
                        />
                    </label>
                    {errors.email && <span>{errors.email.message}</span>}
                </p>


                <p>
                    <label htmlFor="areaCode">
                        Area Code
                        <input
                            type="text"
                            name= "areaCode"
                            id="areaCode"
                            ref={register(
                                {
                                    required: {
                                        value: true,
                                        message: 'This field must have an input',
                                    },
                                    pattern: {
                                        value:/([0-9]{4}[A-Z]{2})/,
                                        message: 'Please insert a valid area code (with caps)',
                                    },
                                }
                            )}
                        />
                    </label>
                    {errors.areaCode && <span>{errors.areaCode.message}</span>}
                </p>

                <p>
                    <label htmlFor="houseNumber">
                        House number
                        <input
                            type="text"
                            name= "houseNumber"
                            id="houseNumber"
                            ref={register(
                                {
                                    required: {
                                        value: true,
                                        message: 'This field must have input',
                                    }
                                }
                            )}
                        />
                    </label>
                    {errors.houseNumber && <span>{errors.houseNumber.message}</span>}
                </p>

                <label htmlFor="frequency">
                    Delivery schedule

                    <label htmlFor="selectDelivery"> every week
                        <input
                            type="radio"
                            name="frequency"
                            id="weekly"
                            value= "every week"
                            ref= {register}
                        />
                    </label>


                    <label htmlFor="frequency"> every other week
                        <input
                            type="radio"
                            name="frequency"
                            id="everyOtherWeek"
                            ref = {register}
                            value= "every other week"
                        />
                    </label>

                    <label htmlFor="frequency"> every month
                        <input
                            type="radio"
                            name= "frequency"
                            id="monthly"
                            ref = {register}
                            value= "every month"
                        />
                    </label>

                    <label htmlFor="frequency"> other
                        <input
                            type="radio"
                            id="other"
                            name="frequency"
                            value="other"
                            ref = {register}
                        />
                    </label>
                </label>
                {selectedFrequency ==='other' && (
                    <input
                        type="text"
                        name="setDifferentScheme"
                        ref={register({ required: true })}
                    />
                )}


                <p>
                    <label htmlFor="remarks"> Remarks
                    </label>
                    <textarea
                        placeholder= "write you remarks here"
                        id="remarks"
                        ref={register}
                        name="remarks"
                    />
                </p>

                <p>
                    <label htmlFor="termsAndConditions">
                        <input
                            name="termsAndConditions"
                            type="checkbox"
                            id="termsAndConditions"
                            ref={register(
                                {
                                    required: {
                                        value: true,
                                        message: 'You must agree with the terms to proceed',
                                    }
                                })}
                        />
                        I agree with the terms
                    </label>
                    {errors.termsAndConditions && <span>{errors.termsAndConditions.message}</span>}
                </p>

                <p>
                    <button
                        type= "submit"
                        id="confirmButton"
                        name="submitButton"> Send
                    </button>
                </p>
            </form>
        </div>
    );
}

export default App;
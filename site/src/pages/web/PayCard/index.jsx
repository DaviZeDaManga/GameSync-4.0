import './index.scss'
import './colors.scss'

export default function PayCard(){

 
    

    return(
       
       <main id='PayCard'>
        <section class="payment-section">
        <div class="container">
            <div class="payment-wrapper">
                <div class="payment-left">
                    <div class="payment-header">
                        <div class="payment-header-icon"><i class="ri-flashlight-fill"></i></div>
                        <div class="payment-header-title">Order Summary</div>
                        <p class="payment-header-description">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                    <div class="payment-content">
                        <div class="payment-body">
                            <div class="payment-plan">
                                <div class="payment-plan-type">Pro</div>
                                <div class="payment-plan-info">
                                    <div class="payment-plan-info-name">Professional Plan</div>
                                    <div class="payment-plan-info-price">$49 per month</div>
                                </div>
                                <a href="#" class="payment-plan-change">Change</a>
                            </div>
                            <div class="payment-summary">
                                <div class="payment-summary-item">
                                    <div class="payment-summary-name">Additional fee</div>
                                    <div class="payment-summary-price">$10</div>
                                </div>
                                <div class="payment-summary-item">
                                    <div class="payment-summary-name">Discount 20%</div>
                                    <div class="payment-summary-price">-$10</div>
                                </div>
                                <div class="payment-summary-divider"></div>
                                <div class="payment-summary-item payment-summary-total">
                                    <div class="payment-summary-name">Total</div>
                                    <div class="payment-summary-price">-$10</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="payment-right">
                    <form action="" class="payment-form">
                        <h1 class="payment-title">Payment Details</h1>
                        <div class="payment-method">
                            <input type="radio" name="payment-method" id="method-1" checked/>
                            <label for="method-1" class="payment-method-item">
                                <img src="/assets/images/pay/visa.png" alt=""/>
                            </label>
                            <input type="radio" name="payment-method" id="method-2"/>
                            <label for="method-2" class="payment-method-item">
                                <img src="/assets/images/pay/mastercard.png" alt=""/>
                            </label>
                            <input type="radio" name="payment-method" id="method-3"/>
                            <label for="method-3" class="payment-method-item">
                                <img src="/assets/images/pay/paypal.png" alt=""/>
                            </label>
                            <input type="radio" name="payment-method" id="method-4"/>
                            <label for="method-4" class="payment-method-item">
                                <img src="assets/images/pay/nubank-logo.png" alt=""/>
                            </label>
                        </div>
                        <div class="payment-form-group">
                            <input type="email" placeholder=" " class="payment-form-control" id="email"/>
                            <label for="email" class="payment-form-label payment-form-label-required">Email Address</label>
                        </div>
                        <div class="payment-form-group">
                            <input type="text" placeholder=" " class="payment-form-control" id="card-number"/>
                            <label for="card-number" class="payment-form-label payment-form-label-required">Card Number</label>
                        </div>
                        <div class="payment-form-group-flex">
                            <div class="payment-form-group">
                                <input type="date" placeholder=" " class="payment-form-control" id="expiry-date"/>
                                <label for="expiry-date" class="payment-form-label payment-form-label-required">Expiry Date</label>
                            </div>
                            <div class="payment-form-group">
                                <input type="text" placeholder=" " class="payment-form-control" id="cvv"/>
                                <label for="cvv" class="payment-form-label payment-form-label-required">CVV</label>
                            </div>
                        </div>
                        <button type="submit" class="payment-form-submit-button"><i class="ri-wallet-line"></i> Pay</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

      
        </main>        
    )
}
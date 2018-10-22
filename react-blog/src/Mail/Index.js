import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <h4>Contact</h4>
                <form action="https://formspree.io/cavi98@icloud.com" method="POST">
                    <input type="text" name="Corporation Name" placeholder="Corporation Name"/>
                    <input type="text" name="Name" placeholder="Your Name"/>
                    
                    <input type="email" name="E-mail" placeholder="E-mail"/>
                    <textarea type="text" name="Message" cols="30" rows="40" placeholder="Your Message"></textarea>
                    <input type="submit" value="Send" class="send_btn"/>
                </form>
            </div>
        );
    }
}

export default Form;
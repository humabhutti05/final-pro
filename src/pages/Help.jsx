import React from 'react';
import { Container} from 'react-bootstrap';

const Help = () => {
  return (
    <div style={{backgroundColor: "#000d1a", color:"white"}}>
    <Container>
      <div className='container align-items-center py-5'>
      <h1 style={{textAlign: "center" , fontFamily: "sans-serif"}}>Help/FAQ</h1>
    
          
            <h5>Q :How to Play Game A?</h5>
         
         
          
              <p>
                Game A is a puzzle game where you need to arrange blocks in the
                correct order. Follow these steps to play:
              </p>
              <ol>
                <li>Step 1: Start the Game A from the homepage.</li>
                <li>
                  Step 2: Read the instructions and understand the objective of
                  the game.
                </li>
                <li>
                  Step 3: Use the mouse or arrow keys to move the blocks and
                  arrange them in the correct order.
                </li>
                <li>
                  Step 4: Complete the level by arranging all the blocks
                  correctly.
                </li>
                <li>Step 5: Repeat the process for the next levels.</li>
              </ol>
       
              <p>
                Game B is a strategy game where you need to build a city and
                manage its resources. Follow these steps to play:
              </p>
              <ol>
                <li>Step 1: Start the Game B from the homepage.</li>
                <li>
                  Step 2: Read the instructions and understand the objective of
                  the game.
                </li>
                <li>
                  Step 3: Use the mouse or touchscreen to build and manage your
                  city.
                </li>
                <li>
                  Step 4: Balance resources, construct buildings, and expand
                  your city to succeed.
                </li>
                <li>Step 5: Enjoy the game and have fun!</li>
              </ol>
       
        {/* Add more game-specific FAQs here */}

   
              <h5>Q: How do I contact support?</h5>
              <p>
                A: If you need any assistance or have any questions, you can
                reach out to our support team by visiting the Contact Us page
                on our website.
              </p>
              <h5>Q: Can I play the games on mobile devices?</h5>
              <p>
                A: Yes, our games are designed to be compatible with both
                desktop and mobile devices. You can enjoy the games on any
                device with a modern web browser.
              </p>
             
              </div>
 
    </Container>
    </div>
  );
};

export default Help;






 
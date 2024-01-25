function noLayout() {
  document.getElementById('cards').classList.value = '';
}

function horizontalLayout() {
  noLayout();
  document.getElementById('cards').classList.add('horizontal');
}

function verticalLayout() {
  noLayout();
  document.getElementById('cards').classList.add('vertical');
}

function gridLayout() {
  noLayout();
  document.getElementById('cards').classList.add('grid');
}


function showTools() {
  blankAll();
  document.getElementById('cardTools').innerHTML = /*html*/`<div class="innerCard">
  Vi bruker HTML til å definere et dokument.
  <ul>
      <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
      <li>Tagger for grunnleggende formatering av tekst</li>
      <li><tt>&lt;div&gt;</tt></li>
      <li><tt>&lt;input type="text"&gt;</tt></li>
      <li><tt>&lt;button&gt;</tt></li>
      <li><a href="https://www.w3schools.com/html/default.asp" 
             target="_new">W3Schools HTML Tutorial</a>
      </li>
      <li><a href="https://www.w3schools.com/tags/default.asp" 
             target="_new">W3Schools HTML Reference</a>
      </li>
  </ul>
</div>
</div>`
}

function showHtml() {
  blankAll();
  document.getElementById('cardHtml').innerHTML = /*html*/`
  <div class="innerCard">
  Vi bruker HTML til å definere et dokument.
  <ul>
      <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
      <li>Tagger for grunnleggende formatering av tekst</li>
      <li><tt>&lt;div&gt;</tt></li>
      <li><tt>&lt;input type="text"&gt;</tt></li>
      <li><tt>&lt;button&gt;</tt></li>
      <li><a href="https://www.w3schools.com/html/default.asp" 
             target="_new">W3Schools HTML Tutorial</a>
      </li>
      <li><a href="https://www.w3schools.com/tags/default.asp" 
             target="_new">W3Schools HTML Reference</a>
      </li>
  </ul>
</div>
  `;
}

  function showCss() {
  blankAll();
  document.getElementById('cardCss').innerHTML = /*html*/`
  <div class="innerCard">
            Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter, utseende og lignende.
            <ul>
                <li><tt>background-color</tt></li>
                <li><tt>color</tt></li>
                <li><tt>padding</tt></li>
                <li><tt>margin</tt></li>
                <li><tt>border</tt></li>
                <li><tt>text-align</tt></li>
                <li><tt>font-size</tt></li>
                
                <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" 
                       target="_new">Flexbox</a></li>
                <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" 
                       target="_new">Grid</a></li>
                <li><a href="https://www.w3schools.com/css/default.asp" 
                       target="_new">W3Schools CSS Tutorial</a>
                </li>
                <li><a href="https://www.w3schools.com/cssref/default.asp" 
                       target="_new">W3Schools CSS Reference</a>
                </li>
            </ul>
        </div>
  `;
  }

  function showJavaScript() {
    blankAll();
    document.getElementById('cardJavaScript').innerHTML = /*html*/`
      <div class="innerCard">
         Det viktigste vi skal lære er programmeringsspråket JavaScript. 
         Vi skal lære grunnleggende programmering
         ved å manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
      <ul>
        <li>Det finnes en W3Schools JavaScript Tutorial, 
            men her anbefaler vi heller å følge kurset vårt på Moodle.
        </li>
        <li><a href="https://www.w3schools.com/jsref/default.asp" 
               target="_new">W3Schools JavaScript Reference
        </a></li>
      </ul>
</div>
    `;
  }

  function
  
  
  function blankAll() {
    document.getElementById('').innerHTML='';
    document.getElementById('').innerHTML='';
    document.getElementById('').innerHTML='';
    document.getElementById('').innerHTML='';
    document.getElementById('').innerHTML='';
  }


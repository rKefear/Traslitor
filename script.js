let input = document.querySelector('#input')
let button = document.querySelector('#button')
let boxRu = document.querySelector('#fieldRu')
let boxEng = document.querySelector('#fieldEng')




button.addEventListener('click', function() {
  let alph = {
    'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
    'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
    'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
    'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
    'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
    'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
    'э': 'e',    'ю': 'yu',   'я': 'ya',
  
    'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
    'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
    'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
    'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
    'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
    'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
    'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya',     ' ': ' '
  }

  
  let div = document.createElement('div')
  let div2 = document.createElement('div')
  div.className = 'divFields'
  div2.className = 'divFields'
  div.title = input.value
  boxRu.appendChild(div)
  boxEng.appendChild(div2)
  
  let ruText = input.value;
  if(ruText.length > 15){
    div.textContent = ruText.slice(0, 15) + '...';
  } else {
    div.textContent = ruText
  }

  let engText = ''
  
  for(let i = 0; i < ruText.length; i++){
    if(alph.hasOwnProperty(ruText[i])){
      engText += alph[ruText[i]]
    } else {
      engText += ruText[i]
    }
      
    if(engText.length > 15){
      div2.textContent = engText.slice(0, 15) + '...'
  } else {
      div2.textContent = engText
  }
}

div2.title = engText
})

import fs from 'fs';
import path from 'path';


const fontsDir = 'app/fonts/';
const fontsFile = 'app/sass/base/_typography.scss';
const fontsCSSDir = '../fonts/';

let fontsPaths = [];
let fontsNames = [];
let fontName = '';
let fontExtension = '';
let fontFaces = [];



/** Считываем директорию **/
fontsPaths = fs.readdirSync(fontsDir);



/** Если среди шрифтов есть FontAwesome, убираем его из массива **/
let index = fontsPaths.indexOf('font-awesome');
if(index != -1) {
	fontsPaths.splice(index, 1);
}



/** Получаем список шрифтов без расширений **/
fontsPaths.map((font) => {
	fontName = path.parse(font).name;	
	if(!fontsNames.includes(fontName)) {
		fontsNames.push(fontName);
	}
});



/** Генерируем массив с объектами семейств шрифтов **/
fontsNames.map((fontName) => {
	let font = {};
	let fontFamily = '';
	
	let fontRegExp = new RegExp(/ultra-light|ultralight|thin|light|light-italic|lightitalic|regular|italic|medium|semibold|semibold-italic|semibolditalic|bold|bold-italic|bolditalic|extrabold|extrabold-italic|extrabolditalic|black|heavy/i);
	fontFamily = fontName.replace(fontRegExp, '').replace('-', '');
	fontFamily = fontFamily.charAt(0).toUpperCase() + fontFamily.slice(1).trim();

	font.name = fontFamily;

	font.src = '';
	fontsPaths.map((fontPath) => {
		if(fontName == path.parse(fontPath).name) {
			fontExtension = path.extname(fontPath).replace('.', '');
			if(font.src == '') {
				font.src = `url("${fontsCSSDir + fontPath}") format("${fontExtension}")`;
			}
			else {
				font.src += `, url("${fontsCSSDir + fontPath}") format("${fontExtension}")`;
			}
		}
	});


	if(fontName.search(/ultra-light|ultralight/i) > 0) {
		font.weight = 100;
    font.style = 'normal';
	}
	if(fontName.search(/thin/i) > 0) {
		font.weight = 200;
    font.style = 'normal';
	}
	if(fontName.search(/light/i) > 0) {
		font.weight = 300;
    font.style = 'normal';
	}
	if(fontName.search(/light-italic|lightitalic/i) > 0) {
		font.weight = 300;
    font.style = 'italic';
	}
	if(fontName.search(/regular/i) > 0) {
		font.weight = 400;
    font.style = 'normal';
	}
	if(fontName.search(/italic/i) > 0) {
		font.weight = 400;
    font.style = 'italic';
	}
	if(fontName.search(/medium/i) > 0) {
		font.weight = 500;
    font.style = 'normal';
	}
	if(fontName.search(/semibold/i) > 0) {
		font.weight = 600;
    font.style = 'normal';
	}
	if(fontName.search(/semibold-italic|semibolditalic/i) > 0) {
		font.weight = 600;
    font.style = 'italic';
	}
	if(fontName.search(/bold/i) > 0) {
		font.weight = 700;
		font.style = 'normal';
	}
	if(fontName.search(/bold-italic|bolditalic/i) > 0) {
		font.weight = 700;
    font.style = 'italic';
	}
	if(fontName.search(/extrabold/i) > 0) {
		font.weight = 800;
		font.style = 'normal';
	}
	if(fontName.search(/extrabold-italic|extrabolditalic/i) > 0) {
		font.weight = 800;
    font.style = 'italic';
	}
	if(fontName.search(/black|heavy/i) > 0) {
		font.weight = 900;
    font.style = 'normal';
	}
	if(fontName.search(fontRegExp) == -1) {
		font.weight = 400;
    font.style = 'normal';
	}

	fontFaces.push(font);
});



/** Очищаем файл типографики **/
fs.writeFile(fontsFile, '');



/** Подставляем код в файл типографики **/
fontFaces.map((font) => {
	let fontFace = `@font-face {
  font-family: "${font.name}";
  src: ${font.src};
  font-weight: ${font.weight};
  font-style: ${font.style};
}

`

	fs.appendFile(fontsFile, fontFace, function(err)  {
		if(err) return err;
	})
	console.log(`Добавлен шрифт: ${font.name}`);
});
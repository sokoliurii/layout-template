import fs from 'fs';
import path from 'path';

const fontsDir = 'app/fonts/'; // Директория шрифтовых файлов
const fontsCSSDir = '../fonts/'; // Путь относительно к папке со шрифтами относительно файла типографики
const fontsFile = 'app/css/base/typography.css'; // Путь к файлу типографики

let fontsPaths = [];
let fontsNames = [];
let fontFaces = [];



/** Считываем директорию **/
fontsPaths = fs.readdirSync(fontsDir);



/** Получаем список шрифтов без расширений **/
fontsPaths.map(font => {
	let fontName = path.parse(font).name;
	if(!fontsNames.includes(fontName)) {
		fontsNames.push(path.parse(font).name);
	}
});



/** Генерируем массив с объектами семейств шрифтов **/
fontsNames.map(fontName => {
	let font = {};
	let fontFamily = '';
	let fontExtension = '';
	let fontRegExp = new RegExp(/ultra|light|thin|italic|regular|medium|semi|bold|extra|black|heavy/gi);

	/** Имя гарнитуры **/
	fontFamily = fontName.replace(fontRegExp, '').replace('-', '');
	fontFamily = fontFamily.charAt(0).toUpperCase() + fontFamily.slice(1).trim();
	font.name = fontFamily;

	font.src = '';
	fontsPaths.map(fontPath => {

	/** Относительный путь на шрифтовой файл **/
	if(fontName == path.parse(fontPath).name) {
		fontExtension = path.extname(fontPath).replace('.', '');
		let url = `url('${fontsCSSDir + fontPath}') format('${fontExtension}')`;
		font.src == '' ? font.src = url : font.src += ',\n    ' + url;
	}
	});

	/**
	 * Приводим имя файла к единому виду и передаем
	 * значения font-weight и font-style гарнитуры,
	 * а также начертание гарнитуры для вывода в консоль
	**/
	fontName = fontName.toLowerCase().replace('-', '');
	if(fontName.search(/light/i) > 0 && fontName.search(/ultralight/i) < 0 && fontName.search(/lightitalic/i) < 0) {
		font.weight = 300;
		font.style = 'normal';
		font.styleName = 'Light';
	}
	if(fontName.search(/italic/i) > 0 && fontName.search(/lightitalic/i) < 0 && fontName.search(/semibolditalic/i) < 0 && fontName.search(/bolditalic/i) < 0 && fontName.search(/extrabolditalic/i) < 0) {
		font.weight = 400;
		font.style = 'italic';
		font.styleName = 'Italic';
	}
	if(fontName.search(/bold/i) > 0 && fontName.search(/semibold/i) < 0 && fontName.search(/semibolditalic/i) < 0 && fontName.search(/bolditalic/i) < 0 && fontName.search(/extrabolditalic/i) < 0) {
		font.weight = 700;
		font.style = 'normal';
		font.styleName = 'Bold';
	}
	if(fontName.search(/semibold/i) > 0 && fontName.search(/semibolditalic/i) < 0) {
		font.weight = 600;
		font.style = 'normal';
		font.styleName = 'Semibold';
	}
	if(fontName.search(/ultralight/i) > 0) {
		font.weight = 100;
    font.style = 'normal';
		font.styleName = 'Ultra Light';
	}
	if(fontName.search(/thin/i) > 0) {
		font.weight = 200;
    font.style = 'normal';
		font.styleName = 'Thin';
	}
	if(fontName.search(/lightitalic/i) > 0) {
		font.weight = 300;
    font.style = 'italic';
		font.styleName = 'Light Italic';
	}
	if(fontName.search(/regular/i) > 0) {
		font.weight = 400;
    font.style = 'normal';
		font.styleName = 'Regular';
	}
	if(fontName.search(/medium/i) > 0) {
		font.weight = 500;
    font.style = 'normal';
		font.styleName = 'Medium';
	}
	if(fontName.search(/semibolditalic/i) > 0) {
		font.weight = 600;
    font.style = 'italic';
		font.styleName = 'Semibold Italic';
	}
	if(fontName.search(/bolditalic/i) > 0 && fontName.search(/semibolditalic/i) < 0) {
		font.weight = 700;
    font.style = 'italic';
		font.styleName = 'Bold Italic';
	}
	if(fontName.search(/extrabold/i) > 0) {
		font.weight = 800;
		font.style = 'normal';
		font.styleName = 'Extrabold';
	}
	if(fontName.search(/extrabolditalic/i) > 0) {
		font.weight = 800;
    font.style = 'italic';
		font.styleName = 'Extrabold Italic';
	}
	if(fontName.search(/black|heavy/i) > 0) {
		font.weight = 900;
    font.style = 'normal';
		font.styleName = 'Black';
	}
	if(fontName.search(fontRegExp) == -1) {
		font.weight = 400;
    font.style = 'normal';
		font.styleName = 'Regular';
	}

	fontFaces.push(font);
});



/** Очищаем файл типографики **/
fs.writeFile(fontsFile, '', err => {
	if(err) return err;
});


/** Подставляем код в файл типографики и делаем вывод в консоль **/
fontFaces.map(font => {
	/** Проверяем из скольки слов состоит имя гарнитуры, если их нескольких, то оборачиваем его в кавычки **/
	font.name = font.name.indexOf(' ') >= 0 ? "'" + font.name + "'" : font.name;

	let fontFace = `@font-face {
  font-family: ${font.name};
  src: ${font.src};
  font-weight: ${font.weight};
  font-style: ${font.style};
}

`

	fs.appendFile(fontsFile, fontFace, err =>  {
		if(err) return err;
		console.log(`Добавлен шрифт ${font.name}, с начертанием ${font.styleName}.`);
	});
});

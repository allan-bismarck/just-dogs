const BASE_URL = 'https://dog.ceo/api/breeds/image/random';
const dogBtn = document.getElementById('change-dog');
const dogImg = document.getElementById('dog');

const getDogs = async () => {
	try {
		const data = await fetch(BASE_URL);
		const json = await data.json()

		return json.message;
	} catch(e) {
		console.log(e.message);
	}
}

const loadImg = async () => {
	dogImg.src = await getDogs();
}

dogBtn.addEventListener('click', loadImg);

loadImg();
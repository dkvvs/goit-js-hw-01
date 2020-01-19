const countryInputRef = document.querySelector('input[name="country"]');
const buttonRef = document.querySelector('button');

buttonRef.addEventListener('click', function() {
  console.log('countryInputRef.value: ', countryInputRef.value);

  let country = countryInputRef.value;
  let price;

  if (country !== '') {
    country = country.toLowerCase();
  } else {
    alert('Не введена страна доставки');
  }

  switch (country) {
    case '':
      break;
    case 'китай':
      price = 100;
      break;
    case 'чили':
      price = 250;
      break;
    case 'австралия':
      price = 170;
      break;
    case 'индия':
      price = 80;
      break;
    case 'ямайка':
      price = 120;
      break;
    default:
      alert('В вашей стране доставка не доступна');
  }

  if (price > 0) {
    country = country[0].toUpperCase() + country.substring(1);
    console.log(`'Доставка в ${country} будет стоить ${price} кредитов'`);
  }
});

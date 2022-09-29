import PropTypes from "prop-types";
function User({name, surname, adress, age, friends, isLogged}) {

    if(!isLogged){
        return <h1>Giriş Yapılamadı</h1>
    }

  return (
    <div>
      <h1>
         {name} {surname} ({age})
      </h1>
      {adress.title} {adress.zip}
      <br />
      <br />
      {friends.map((friend) => (
        <div key={friend.id}>{friend.name}</div>
      ))}
    </div>
  );
}

//PropTypes ile değişkenlerin type larını belirliyoruz. Böylece farklı bir değer girilirse hata verecektir.
//isRequired ile değişkene değer girilme zorunluluğu katıyoruz.
//oneOfType ile değişkene girilecek değerin cinsinini birden fazla türde belirleyebiliyoruz.
//shape ile objenin içindeki nesnelerin typelarını ayrı ayrı verebiliyoruz.
User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  isLogged: PropTypes.bool.isRequired,
  friends: PropTypes.array,
  adress: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number,
  }),
};

//Eğer aşağıdaki değikenlere diğer sayfalardan bir bilgi gelmiyorsa default olarak aşağıdaki bilgileri dönecektir. 
User.defaultProps ={
    name: "isimsiz",
    isLogged: false,
}

export default User;

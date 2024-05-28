import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 } from 'uuid'



const About = () => {
  //Получение данных с api
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [checkBox, setcheckBox] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/books/?format=json');
      const jsonData = await response.json();
      setData(jsonData);

    };

    fetchData();
  }, []);

  //Передача данных в список

  const list = Array.from(new Set(data.map(function (book) {
    return book;
  })));
  const filteredBooks = data.filter(book => {
    if (!selectedCategory) {
      if (!checkBox)
        return book.title.toLowerCase().includes(searchTerm.toLowerCase())
      return book.title.toLowerCase().includes(searchTerm.toLowerCase()) && book.has_audio === checkBox;
    }
    else {
      if (!checkBox) {
        return book.genre === selectedCategory && book.title.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return book.genre === selectedCategory && book.title.toLowerCase().includes(searchTerm.toLowerCase()) && book.has_audio === checkBox;
    }
  })

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <>
      <div id="selector">
        <input className="alert alert-success" placeholder="Поиск по библиотеке:" id="search" type='text' onChange={(event) =>
          setSearchTerm(event.target.value)}></input>
        <select className="alert alert-success"
          name="category-list"
          id="category-list"
          onChange={handleCategoryChange}
        >
          <option value="">All</option>
          <option value="Ballada">Ballada</option>
          <option value="Wiersz">Wiersz</option>
          <option value="Dramat romantyczny">Dramat romantyczny</option>
          <option value="Poemat">Poemat</option>
          <option value="Powieść poetycka">Powieść poetycka</option>
          <option value="Publicystyka">Publicystyka</option>
          <option value="Bajka">Bajka</option>
          <option value="Romans">Romans</option>
          <option value="Opowiadanie">Opowiadanie</option>
          <option value="Oda">Oda</option>
          <option value="Epos">Epos</option>
          <option value="Pieśń">Pieśń</option>
          <option value="Sonet">Sonet</option>
          <option value="Motto">Motto</option>
          <option value="Dedykacja">Dedykacja</option>
          <option value="Dedykacja, Motto">Dedykacja, Motto</option>
        </select>
        <div className="checkbox-wrapper-47 mt-1" >
          <input type="checkbox" onChange={(event) => setcheckBox(event.target.checked)} name="cb" id="cb-47" />
          <label for="cb-47">Наличие аудио-формата</label>
        </div>
      </div>

      {filteredBooks.map(book => (
        <div className="card">
          <div className="columns" key={v4()}>

            <div className="image"> <img src={book.simple_thumb} alt="" className="image" width="230" /> </div>
            <div className="title"> <h3>{book.title}</h3> </div>
            <div className="kind"> <h5>Род</h5><hr></hr>{book.kind} </div>
            <div className="genre">  <h5>Жанр</h5><hr></hr>{book.genre}</div>
            <div className="epoch">  <h5>Эпоха</h5> <hr></hr>{book.epoch}</div>
            <div className="link">						 < Link to={book.url} id="link">
              Узнать подробнее...
            </Link>
            </div>
          </div>
        </div>
      ))}

    </>
  );
}


export default About;
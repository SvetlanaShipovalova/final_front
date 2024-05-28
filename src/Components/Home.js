import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
        <div>
            <Content />
        </div>
    )
}

//Содержание сайта: авторы
const user = {
    name: "Адам Мицкевич",
    imageUrl: "https://paoloayroni.ru/wp-content/uploads/d/2/8/d2868f290b9dc1a9a51ffda32a4ed667.jpeg",
    imageSize: "200px",
    amount_book: 158,
    completed: 150,
    in_process: 8,
    about_user: "Польский писатель, поэт и переводчик, драматург, педагог, политический публицист, деятель польского национального движения, член общества филоматов. Оказал большое влияние на становление польской, литовской, белорусской и украинской литературы XIX века. В Польше считается одним из трёх величайших польскоязычных поэтов эпохи романтизма.",
}

function Profile() {
    return (
        <div className="m-3 text-center">
            <div className="container d-flex justify-content-center mt-4">
                <div className="card p-3 py-4" id="card">
                    <img className="mx-auto d-block"
                        src={user.imageUrl}
                        alt={user.name}
                        style={{
                            width: user.imageSize,
                            height: "auto",
                            border: "4mm ridge rgba(13, 145, 59, .6)",
                        }}
                    /><br />
                    <div className="text-center">
                        <h3 className="mt-">{user.name}</h3>
                        <span className="mt-1 clearfix fs-4 font-weight-bold" >Писатель</span>

                        <div className="row mt-3 mb-3">

                            <div className="col-md-4 fs-2">
                                <h5 className="font-weight-bold">Всего</h5>
                                <span className="num">{user.amount_book}</span>
                            </div>
                            <div className="col-md-4 fs-2">
                                <h5 className="font-weight-bold">Завершено</h5>
                                <span className="num">{user.completed}</span>
                            </div>
                            <div className="col-md-4 fs-2">
                                <h5 className="font-weight-bold">В процессе</h5>
                                <span className="num">{user.in_process}</span>
                            </div>
                        </div>
                        <hr className="line" />
                        <small className="mt-4 fs-4">{user.about_user}</small>
                    </div>
                </div>
            </div>
        </div>

    );
}

function Content() {
    return (
        <div className="layout">
            <div id="profile"><Profile /></div>

        </div>
    );
}
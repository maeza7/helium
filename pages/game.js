import Menu from '../components/menu';

const game = () => (
    <div>
        <div>
            <h1 style={{textAlign: "center"}}>Akademi E-Sports Indonesia</h1>
        </div>
        <Menu />
        <link />
        <main>
            <section>
                <img src="/images/dota2.jpg" alt="Dota2"/>
                <h2>Dota 2</h2>
                <p>Game PC MOBA yang memiliki tingkat kekompleksan yang sangat tinggi</p>
                <a href="#">LEARN </a>
            </section>
            <section>
                <img src="/images/mobilelegend.jpeg" alt="mobilelegend"/>
                <h2>Mobile Legend</h2>
                <p>Game Mobile MOBA terpopuler di Indonesia </p>
                <a href="#">LEARN </a>
            </section>
            <section>
            <img src="images/pubgm.jpg" alt="pubgm"/>
                <h2>PUBG Mobile</h2>
                <p>Game bergenre battle royale yang cukup populer di Indonesia</p>
                <a href="#">LEARN </a>
            </section>
        </main>
    </div>
)

export default game;
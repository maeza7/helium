import Menu from '../components/menu';

function Beranda(){
  return(
    <div>
      <div>
        <h1 style={{textAlign: "center"}}>Akademi E-Sports Indonesia</h1>
      </div>
      <Menu />
      <main>
        <p>Kami siap mengedukasi dan membantu player Indonesia untuk menjadi lebih baik</p>
      </main>
    </div>
  );
}

export default Beranda;
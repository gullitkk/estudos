import './Banner.css'

function Banner() {
    return (
        <header className = 'banner'>
             <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/>
        </header> 
        
        // parece html mas na verdade e um jsx, jsx nada mais e que um tradutor ele pega esse codigo que eu escrevi aparatemente html e transforma em um codigo que serviria pro js, por exemplo nesse caso o codigo seria tipo um document.create('img')// 

        //o alt e importante na hora de colocar uma imagem pois e um texto para exemplificar oque e aquela imagem, esse texto nao aparece// 
    )

}

export default Banner

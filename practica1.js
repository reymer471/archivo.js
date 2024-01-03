        const express= require('express')

        const PORT = process.env.PORT || 3001;

        //Rutas de la API

            servidor.post("/persona", (req,res)=>{
                const persona = req.body;

                console.log(`Nueva Persona ${persona.nombre} con edad ${persona.edad}`);

                res.status(201).send(persona)

                module.exPORTs=app;
        
                {let autorizacion= prompt('ingrese 1 para comenzar');

                if (autorizacion =1){   
                    let name=prompt('ingrese un no') ;
                    
                    alert('hola'+name)}
                    else{
                        alert ('nose pudo ingresar ');
                    }
                    const sumaab = (a,b) => {sumaab=a+b}//funcion.
                    
                    let a=prompt ('ingrese un numero');
                    
                    let b=prompt ('ingrese otro numero');
                    alert(sumaab(a,b));
                    
                    function sumacd (a,b){sumacd=c+d}
                    
                    let c=prompt ('ingrese un numero');
                    
                    let d=prompt ('ingrese otro numero');
                    
                    alert(sumacd(c,d))
                    
                    let numero = {
                        nombre: 'suma de numeros',
                        
                        sumador: function(a1, a2) { sumacd + sumaab;
                        }
                    };
                }
                class Numero {
                    constructor(n) {
                        this.numerador = n;
                    }
                }
                
                class Denominador {
                    constructor(d) {
                        this.denominador = d;
                    }
                }
                
                let s_um= new Numero(7);
                let s_m= new Numero(3);
                
                let denominador_um= new Denominador(5);
                let denominador_m= new Denominador(6);
                
                const PORT = process.env.PORT || 8080;
                
                let app = express();
                
                servidor.get('/sum', (req, res) => {
                    let sum = s_um.numerador + s_m.numerador;
                    res.send(`la suma es: ${sum}`);
                });
                
                servidor.get('/prod', (req, res) => {
                    let prod = s_um.numerador * s_m.numerador;
                    res.send(`el producto es: ${prod}`);
                });
                
                servidor.get('/div', (req, res) => {
                    if(denominador_m.denominador === 0) {
                        res.send('no se puede dividir por cero');
                    } else {

                        let div = s_um.numerador / denominador_m.denominador;
                        res.send(`la division es: ${div}`);
                    }
                });
            
                servidor.listen(PORT, () => {
                    console.log(`el server escucha en el puerto ${PORT}`);
                
                });});
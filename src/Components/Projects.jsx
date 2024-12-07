import Card from "./Utils/Card";
import './Projects.css'
import { Camera, Circle, Code, GitHub } from "./iconos/icons";

const Projects = () => {

    return(
        <div className="projects" id="projects" >
            <h2 >PROJECTS</h2>
            <div className="projects-cards">
                <Card title={'App para una Radio'} img={'./AppRadio.jpg'} description={'Es una app en donde pueden escuchar la transmision en vivo de la Radio y seguir la transmision en vivo que realizan en Youtube '} body={
                    <div >
                        <div className="flex flex-col gap-2" >
                            <h2 className="text-xl font-semibold mt-4 text-center " >Funcionalidades Principales</h2>
                            <p className="flex" ><Circle/> Escuchar la transmision de la radio en directo </p>
                            <p className="flex" ><Circle/> Visualizar los streams que se realizan desde Youtube en la aplicacion </p>
                            <p className="flex" ><Circle/> Avisar cuando inicie un Stream en Youtube para que los puedan acompañar en la transmision</p>
                            <p className="flex" ><Circle/> Visualizacion del ultimo live realizado </p>
                        </div> 
                        <div className="flex flex-col gap-2 " >
                            <h2 className=" text-xl font-semibold mt-4 flex items-center justify-center gap-2 " > <Code/> Tecnologias utilizadas</h2>
                            <p className="flex" ><Circle/> React Native: para la crecion de la interfaz grafica </p>
                            <p className="flex" ><Circle/> Expo-av: para la reproduccion del Audi(transmision de la radio) </p>
                            <p className="flex" ><Circle/> API Youtube: para la extraccion de los lives hechos en Youtube y de los videos </p>
                            <p className="flex" ><Circle/> Youtube API Player: para la reproduccion de los videos desde la aplicación</p>
                        </div>
                        <div className="flex flex-col gap-4 mt-4" >
                            <h3 className=" text-xl font-semibold flex gap-2 justify-center items-center " > <Camera/> Vista Previa</h3>
                            <div className="flex flex-wrap gap-3" >
                                <img src="pantalla1.jpg" alt="prev 1" loading="lazy" className="w-[48%] rounded-2xl" />
                                <img src="pantalla2.jpg" alt="prev 2" loading="lazy" className="w-[48%] rounded-2xl" />    
                            </div>
                        </div>
                    </div>
                    } />
                <Card title={'API red social'} img={'./noctua.jpg'} description={'un proyecto personal que busca replicar y mejorar funcionalidades esenciales de una red social como Twitter'} body={
                    <div className="" >
                        <div className="flex flex-col gap-4 " >
                            <h2 className="text-2xl font-bold  text-center ">Funcionalidades Principales</h2>
                            <div className="flex flex-col gap-2" >
                                <h3 className="text-lg font-semibold border-b-2 w-max border-green-600 ">Gestión de usuarios:</h3>
                                <p className="flex" ><Circle/> Registro de usuarios con contraseñas encriptadas utilizando Spring Security y JWT </p>
                                <p className="flex" ><Circle/> Autenticación segura con validación de tokens para proteger los datos del usuario. </p>
                            </div>
                            <div className="flex flex-col gap-2" >
                                <h3 className="text-lg font-semibold border-b-2 w-max border-green-600 " >Creación de contenido: </h3>
                                <p className="flex" ><Circle/> Publicación de posts por parte de los usuarios. </p> 
                                <p className="flex" ><Circle/> Capacidad de reaccionar a publicaciones. </p> 
                                <p className="flex" ><Circle/> Comentarios en los posts para fomentar la interacción. </p>
                            </div>
                            <div className="flex flex-col gap-3" >
                                <h3 className="text-lg font-semibold border-b-2 w-max border-green-600 " >Publicaciones personalizadas</h3>
                                <p className="flex" ><Circle/>Los usuarios pueden ver publicaciones relevantes basadas en su ubicación. </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 mt-2 " >
                            <h2 className=" text-xl font-semibold mt-4 flex items-center justify-center gap-2 " > <Code/> Tecnologias utilizadas</h2>
                            <p className=" text-center " >Este proyecto combina una serie de herramientas y tecnologías para ofrecer un backend
                                robusto y una experiencia de usuario en constante evolución: </p>
                            <div className="flex flex-col gap-2 " >
                                <h3 className="border-b-2 w-max border-green-600 text-lg font-semibold  " >Backend:</h3>
                                <p > <strong className="text-sky-300" >Java:</strong> Lenguaje principal para la API </p>
                                <p > <strong className="text-sky-300" >Spring Boot:</strong> Framework para el desarrollo rápido y eficiente del backend. </p>
                                <p > <strong className="text-sky-300" >Spring Security + JWT:</strong> Encriptación de contraseñas y manejo de tokens para la autenticación y autorización.</p>
                            </div>
                            <div className="flex flex-col gap-2 " >
                                <h3 className=" border-b-2 w-max border-green-600 text-lg font-semibold " >Base de Datos:</h3>
                                <p><strong className="text-sky-300" >PostgreSQL : </strong> Base de datos relacional para el almacenamiento estructurado de información.</p>
                            </div>
                            <div className="flex flex-col gap-2" >
                                <h3 className=" border-b-2 w-max border-green-600 text-lg font-semibold " >Frontend (en desarrollo) </h3>
                                <p> <strong className="text-sky-300" >React:</strong> Actualmente trabajando en la interfaz gráfica para una experiencia de usuario moderna e intuitiva.</p>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                } />
                <Card title={'Administrador de fincas agricolas'} img={'./Agrottech.jpg'} description={'Es una aplicación para la gestión de una finca, La aplicación permite a los administradores gestionar actividades, recursos y registros relacionados con las operaciones diarias que estan realizan '} body={    
                    <div>
                        <div className="flex flex-col gap-2 " >
                            <h2 className=" text-center text-xl font-semibold " >Funcionalidades</h2>
                            <p className="flex"><Circle/> Administrador de roles:  Segun los roles del usuario le da diferentes funcionalidades dentro de la pagina: </p>
                            <p className="flex"><Circle/> Administrar los productos: Segun los productos que se venden y lo que se cosecha se crea el inventario para saber cuanto hay disponible </p>
                            <p className="flex"><Circle/> Administrador de empleados: los jefes de finca pueden ver cuanto se le va a pagar a 'x' empleado</p>
                        </div>
                        <div className=" flex flex-col gap-2 " >
                            <h2 className="flex justify-center my-4 mb-0 font-semibold gap-2 text-xl" ><Code/> Tecnologias utilizadas</h2>
                            <p>MySQL: para la base de datos del proyecto</p>
                            <p>PHP: para el backend y la creacion de los enPoints</p>
                            <p>React: Para la creacion de la interfaz grafica </p>
                        </div>
                        <div className="my-4" >
                            <h2 className="flex justify-center items-center text-xl font-semibold mb-4" > <Camera/> Vista Previa</h2>
                            <div className="" >
                                <img src="./agroPrev1.png" alt="prev1" loading="lazy" />
                                <img src="./agroPrev2.png" alt="prev2" loading="lazy" />
                                <img src="./agroPrev3.png" alt="prev3" loading="lazy" />
                                <img src="./agroPrev4.png" alt="prev4" loading="lazy" />
                                <img src="./agroPrev5.png" alt="prev5" loading="lazy" />
                            </div>
                        </div>
                    </div>
                    } />
                <Card title={'Administrador de hoteles'} img={'./hotelAlura.png'} description={' Es una apliccion de escritorio para la administracion de hoteles en donde pueden reservar curtos o ver las estadisticas del hotel '} body={
                <div>
                    <div className="flex flex-col gap-2" >
                        <h2 className="font-semibold text-center text-xl" > Funcionlidades </h2>
                        <p className="flex gap-2" ><Circle/> Puede crear registros para nuevos clientes para que estos puedan realizar reservaciones </p>
                        <p className="flex gap-2" ><Circle/> Visualizacion de las estdisticas del hotel asi como cuantas reservaciones hubieron este mes etc.. </p>
                        <p className="flex gap-2" ><Circle/> Editar, eliminar Reservaciones  </p>
                    </div>
                    <div className=" flex flex-col gap-4 mt-4 ">
                        <h3 className=" text-xl font-semibold flex gap-2 justify-center items-center " > <Camera/> Vista Previa</h3>
                        <img src="./hotelPrev1.png" alt="prev1" loading="lazy" />
                        <img src="./hotelPrev2.png" alt="prev2" loading="lazy" />
                    </div>
                </div>
                } />
            </div>

        </div>
    )
}

export default Projects;
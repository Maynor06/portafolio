import Card from "./Utils/Card";
import './Projects.css'
import { Camera, Circle, Code, GitHub } from "./iconos/icons";

const Projects = () => {

    return(
        <div className="projects" id="projects" >
            <h2 >PROJECTS</h2>
            <div className="projects-cards">
                <Card title={'Radio App'} img={'./AppRadio.jpg'} description={'It is an app where you can listen to the live broadcast of the Radio and follow the live broadcast they do on Youtube. '} body={
                    <div >
                        <div className="flex flex-col gap-2" >
                            <h2 className="text-xl font-semibold mt-4 text-center " >Main Features</h2>
                            <p className="flex" ><Circle/> Listen to the live broadcast of the Radio </p>
                            <p className="flex" ><Circle/> View streams from YouTube in the app </p>
                            <p className="flex" ><Circle/> Notify when a Stream starts on YouTube so that they can join the broadcast</p>
                            <p className="flex" ><Circle/> View the last live broadcast </p>
                        </div> 
                        <div className="flex flex-col gap-2 " >
                            <h2 className=" text-xl font-semibold mt-4 flex items-center justify-center gap-2 " > <Code/> Technologies used</h2>
                            <p className="flex" ><Circle/> React Native: for creating the graphical interface </p>
                            <p className="flex" ><Circle/> Expo-av: for playing the audio (radio broadcast) </p>
                            <p className="flex" ><Circle/> YouTube API: for extracting live streams and videos from YouTube </p>
                            <p className="flex" ><Circle/> YouTube API Player: for playing videos within the app</p>
                        </div>
                        <div className="flex flex-col gap-4 mt-4" >
                            <h3 className=" text-xl font-semibold flex gap-2 justify-center items-center " > <Camera/> Preview</h3>
                            <div className="flex flex-wrap gap-3" >
                                <img src="pantalla1.jpg" alt="prev 1" loading="lazy" className="w-[48%] rounded-2xl" />
                                <img src="pantalla2.jpg" alt="prev 2" loading="lazy" className="w-[48%] rounded-2xl" />    
                            </div>
                        </div>
                    </div>
                    } />
                <Card title={'Social Network API'} img={'./noctua.jpg'} description={'A personal project that aims to replicate and improve essential functionalities of a social network like Twitter'} body={
                    <div className="" >
                        <div className="flex flex-col gap-4 " >
                            <h2 className="text-2xl font-bold  text-center ">Main Features</h2>
                            <div className="flex flex-col gap-2" >
                                <h3 className="text-lg font-semibold border-b-2 w-max border-green-600 ">User Management:</h3>
                                <p className="flex" ><Circle/> User registration with encrypted passwords using Spring Security and JWT </p>
                                <p className="flex" ><Circle/> Secure authentication with token validation to protect user data. </p>
                            </div>
                            <div className="flex flex-col gap-2" >
                                <h3 className="text-lg font-semibold border-b-2 w-max border-green-600 " >Content Creation: </h3>
                                <p className="flex" ><Circle/> Users can post content. </p> 
                                <p className="flex" ><Circle/> Ability to react to posts. </p> 
                                <p className="flex" ><Circle/> Comment on posts to encourage interaction. </p>
                            </div>
                            <div className="flex flex-col gap-3" >
                                <h3 className="text-lg font-semibold border-b-2 w-max border-green-600 " >Personalized Posts</h3>
                                <p className="flex" ><Circle/>Users can see relevant posts based on their location. </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 mt-2 " >
                            <h2 className=" text-xl font-semibold mt-4 flex items-center justify-center gap-2 " > <Code/> Technologies used</h2>
                            <p className=" text-center " >This project combines a series of tools and technologies to offer a robust backend and a constantly evolving user experience: </p>
                            <div className="flex flex-col gap-2 " >
                                <h3 className="border-b-2 w-max border-green-600 text-lg font-semibold  " >Backend:</h3>
                                <p > <strong className="text-sky-300" >Java:</strong> Main language for the API </p>
                                <p > <strong className="text-sky-300" >Spring Boot:</strong> Framework for rapid and efficient backend development. </p>
                                <p > <strong className="text-sky-300" >Spring Security + JWT:</strong> Password encryption and token management for authentication and authorization.</p>
                            </div>
                            <div className="flex flex-col gap-2 " >
                                <h3 className=" border-b-2 w-max border-green-600 text-lg font-semibold " >Database:</h3>
                                <p><strong className="text-sky-300" >PostgreSQL : </strong> Relational database for structured information storage.</p>
                            </div>
                            <div className="flex flex-col gap-2" >
                                <h3 className=" border-b-2 w-max border-green-600 text-lg font-semibold " >Frontend (in development) </h3>
                                <p> <strong className="text-sky-300" >React:</strong> Currently working on the graphical interface for a modern and intuitive user experience.</p>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                } />
                <Card title={'Agricultural Farm Manager'} img={'./Agrottech.jpg'} description={'It is an application for managing a farm. The application allows administrators to manage activities, resources, and records related to daily operations.'} body={    
                    <div>
                        <div className="flex flex-col gap-2 " >
                            <h2 className=" text-center text-xl font-semibold " >Features</h2>
                            <p className="flex"><Circle/> Role Manager: Depending on the user's roles, it provides different functionalities within the page: </p>
                            <p className="flex"><Circle/> Manage products: Based on the products sold and harvested, an inventory is created to know how much is available </p>
                            <p className="flex"><Circle/> Employee Manager: Farm managers can see how much to pay each employee</p>
                        </div>
                        <div className=" flex flex-col gap-2 " >
                            <h2 className="flex justify-center my-4 mb-0 font-semibold gap-2 text-xl" ><Code/> Technologies used</h2>
                            <p>MySQL: for the project's database</p>
                            <p>PHP: for the backend and creating endpoints</p>
                            <p>React: For creating the graphical interface </p>
                        </div>
                        <div className="my-4" >
                            <h2 className="flex justify-center items-center text-xl font-semibold mb-4" > <Camera/> Preview</h2>
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
                <Card title={'Hotel Manager'} img={'./hotelAlura.png'} description={' It is a desktop application for hotel management where you can book rooms or view hotel statistics '} body={
                <div>
                    <div className="flex flex-col gap-2" >
                        <h2 className="font-semibold text-center text-xl" > Features </h2>
                        <p className="flex gap-2" ><Circle/> Create records for new clients so they can make reservations </p>
                        <p className="flex gap-2" ><Circle/> View hotel statistics such as the number of reservations this month, etc. </p>
                        <p className="flex gap-2" ><Circle/> Edit, delete reservations </p>
                    </div>
                    <div className=" flex flex-col gap-4 mt-4 ">
                        <h3 className=" text-xl font-semibold flex gap-2 justify-center items-center " > <Camera/> Preview</h3>
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

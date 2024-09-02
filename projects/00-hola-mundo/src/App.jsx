// import React from 'react'
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

const users = [
  {
    userName: "JuanMans_",
    name: "Juan Manuel Mansilla Quintana",
    isVerified: true,
    isFollowing: true
  },
  {
    userName: "midudev",
    name: "Miguel Angel Duran",
    isVerified: false,
    isFollowing: false
  },
  {
    userName: "Juan",
    name: "Juan Solo",
    isVerified: true,
    isFollowing: true
  },
  {
    userName: "elonmusk",
    name: "Elon Musk",
    isVerified: true,
    isFollowing: false
  },
  {
    userName: "BillGates",
    name: "Bill Gates",
    isVerified: true,
    isFollowing: false
  },
  {
    userName: "TheRock",
    name: "Dwayne Johnson",
    isVerified: true,
    isFollowing: false
  },
  {
    userName: "neiltyson",
    name: "Neil deGrasse Tyson",
    isVerified: true,
    isFollowing: false
  },
  {
    userName: "NASA",
    name: "NASA",
    isVerified: true,
    isFollowing: false
  },
  {
    userName: "Google",
    name: "Google",
    isVerified: true,
    isFollowing: false
  },
  {
    userName: "reactjs",
    name: "React",
    isVerified:true,
    isFollowing: false
  }]


export function App() {

  return (
    <section className="App">
{/* <DIV>
    
        {/* <TwitterFollowCard         
        userName="JuanMans_"
        initialIsFollowing
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span>Juan ManueL Mansilla Quintana</span>
            <img 
              src="https://cdn-icons-png.flaticon.com/128/7641/7641727.png" 
              alt="Verificado" 
              style={{ width: '16px', height: '16px', marginLeft: '8px' }} 
            />
          </div>
        </TwitterFollowCard>

        <TwitterFollowCard         
        userName="midudev"
        initialIsFollowing ={false}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span>Miguel Angel Duran</span>
            <img 
              src="https://cdn-icons-png.flaticon.com/128/7641/7641727.png" 
              alt="Verificado" 
              style={{ width: '16px', height: '16px', marginLeft: '8px' }} 
            />
          </div>
        </TwitterFollowCard> 
        
        <TwitterFollowCard         
        userName="Juan"
        initialIsFollowing
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span>Juan Solo</span>
            <img 
              src="https://cdn-icons-png.flaticon.com/128/7641/7641727.png" 
              alt="Verificado" 
              style={{ width: '16px', height: '16px', marginLeft: '8px' }} 
            />
          </div>
        </TwitterFollowCard>
        
        <TwitterFollowCard         
        userName="ricarfort"
        initialIsFollowing ={false}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span>El Comandante</span>
            <img 
              src="https://cdn-icons-png.flaticon.com/128/7641/7641727.png" 
              alt="Verificado" 
              style={{ width: '16px', height: '16px', marginLeft: '8px' }} 
            />
          </div>
        </TwitterFollowCard>
        <TwitterFollowCard 
        userName="qacoficial"
        initialIsFollowing
        >
         
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span>Quilmes Pa</span>
            <img 
              src="https://cdn-icons-png.flaticon.com/128/7641/7641727.png" 
              alt="Verificado" 
              style={{ width: '16px', height: '16px', marginLeft: '8px' }} 
            />
          </div>
        </TwitterFollowCard>
        <TwitterFollowCard         
        userName="verificado"
        initiaalIsFollowing
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span>Usuario Verificado</span>
            <img 
              src="https://cdn-icons-png.flaticon.com/128/7641/7641727.png" 
              alt="Verificado" 
              style={{ width: '16px', height: '16px', marginLeft: '8px' }} 
            />
          </div>
        </TwitterFollowCard> */}
{/* </DIV> */} 

{
users.map(user => {
  const {userName, name, isVerified, isFollowing} = user
  return (
    <TwitterFollowCard 
      key={userName}
      name={name}
      userName={userName}
      initialIsFollowing={isFollowing}
      initialVerified={isVerified} 
    />
  )
})
}
</section>
);
}

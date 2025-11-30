import { useEffect, useState } from "react";
// 1. Aggiungi useNavigate qui
import { useLocation, useNavigate } from "react-router-dom";
import myLogo from '../assets/logoMMH.png';

function Logo(){
    return (
      <div className="logo" aria-hidden>
        <img src={myLogo} alt="Logo MMH" style={{ width: '100px', height: 'auto' }} />
      </div>
    );
}

export default function End(){
  const { state } = useLocation();
  // 2. Inizializza la navigazione
  const navigate = useNavigate();

  const tier = state?.tier || "TIER 2";
  

  return (
    <div className="screen">
      
      <div className="card" style={{ position: 'relative' }}>
        
        <div onClick={() => navigate('/')} 
            style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                cursor: 'pointer',
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#333',
                lineHeight: 1
            }}
        >
            ✕
        </div>

        <Logo/>
        <div style={{marginTop:10}} className="title">Welcome in the System!</div>
        <div className="subtitle">You belong to: {tier}</div>

        <div className="code-card">
          <div style={{fontSize:12, color:"#666"}}>here's your code:</div>
          <div className="code-number">2104</div>
        </div>

      </div>

      <div  className="footer-small"  >Ministry of Mental Order</div>

    </div>
  );
}
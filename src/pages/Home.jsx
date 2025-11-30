import { useNavigate } from "react-router-dom";
import myLogo from '../assets/logoMMH.png';

function Logo(){
  return (
    <div className="logo" aria-hidden>
      <img src={myLogo} alt="Logo MMH" style={{ width: '100px', height: 'auto' }} />
    </div>
  );
}

export default function Home(){
  const nav = useNavigate();
  return (
    <div className="screen">
      <div className="card">
        <Logo />
        <div className="subtitle" style={{fontSize: 17}}>
          Simulation of <strong>THE CEREMONY</strong>
            <div className="subtitle">Do you have what it takes to lead <br/> or were you born to follow?</div>
        </div>

        <button className="btn-primary" onClick={() => nav("/form")}>Start your diagnosis</button>
      </div>
      <div  className="footer-small"  >Ministry of Mental Order</div>

    </div>
  );
}

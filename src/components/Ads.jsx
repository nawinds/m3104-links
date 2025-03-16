import React from 'react';

const Ads = () => {
    return (
        <a href="https://private-net.work" target="_blank" rel="noopener noreferrer" style={{color: "inherit"}}>
            <div style={{
                borderRadius: "7px",
                border: "solid 1px rgb(200, 200, 200)",
                padding: "12px",
                opacity: "0.8",
                borderStyle: "dashed"
            }}>
                <div style={{marginBottom: "10px"}}>
                    <span style={{letterSpacing: "1px", opacity: "0.7", fontSize: "0.8em"}}>самоРЕКЛАМА</span>
                </div>
                <p style={{marginBottom: "0"}}>
                    <span style={{fontSize: "1em"}}><b>Private-Net.work</b> — Сайт одноразовых записок</span><br/>
                    <i style={{opacity: "0.6", fontSize: "0.9em"}}>Отправляйте конфиденциальную информацию в любых
                        мессенджерах безопасно: записки шифруются прямо в браузере и удаляются после прочтения</i>
                </p>
            </div>
        </a>
    );
};

export default Ads;
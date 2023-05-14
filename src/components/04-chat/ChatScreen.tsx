import Image from 'next/image';
import contactProfilePic from './profile.jpg';
import closeIcon from './close.svg';
import sendIcon from './send.svg';

export const ChatScreen = () => {
  return (
    <div className="py-6 px-8">
      <header>
        <div>
          <Image src={contactProfilePic} alt="Foto de perfil de amor da minha vida 💜💜" />
          <h1>amor da minha vida 💜💜</h1>
          <div>
            <div />
            <span>Online</span>
          </div>
        </div>
        <button>
          <Image src={closeIcon} alt="Fechar" />
        </button>
      </header>
      <main>
        <h2>Hoje 11:30</h2>

        <ol>
          <li>
            <span>amor da minha vida 💜💜 - 11:30</span>
            <p>Tive uma ideia incrível para um projeto! 😍</p>
          </li>
          <li>
            <span>Você - 11:32</span>
            <p>Sério? Me conta mais.</p>
          </li>
          <li>
            <span>amor da minha vida 💜💜 - 11:34</span>
            <p>E se a gente fizesse um chat moderno e responsivo em apenas uma semana?</p>
          </li>
          <li>
            <span>Você - 11:36</span>
            <p>#boraCodar!🚀</p>
          </li>
        </ol>
      </main>
      <article>
        <input type="text" placeholder="Digite sua mensagem" />
        <button>
          <Image src={sendIcon} alt="Enviar" />
        </button>
      </article>
    </div>
  );
};

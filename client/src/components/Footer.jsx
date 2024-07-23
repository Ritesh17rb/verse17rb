import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white transition duration-300 ease-in-out transform hover:scale-110 moving-gradient'
              style={{ fontFamily: 'Pacifico, cursive' }}
            >
              VerseValley
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://ritesh-portfolio-five.vercel.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Portfolio
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  VerseValley
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://github.com/Ritesh17rb'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='https://ritesh-portfolio-five.vercel.app/' target='_blank'>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='https://portfolio-five-phi-46.vercel.app/' target='_blank'>Privacy Policy</Footer.Link>
                <Footer.Link href='https://portfolio-five-phi-46.vercel.app/' target='_blank'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Ritesh"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='https://portfolio-five-phi-46.vercel.app/' icon={BsFacebook} target='_blank' />
            <Footer.Icon href='https://portfolio-five-phi-46.vercel.app/' icon={BsInstagram} target='_blank' />
            <Footer.Icon href='https://portfolio-five-phi-46.vercel.app/' icon={BsTwitter} target='_blank' />
            <Footer.Icon href='https://github.com/Ritesh17rb' icon={BsGithub} target='blank' />
            <Footer.Icon href='#' icon={BsDribbble} />

          </div>
        </div>
      </div>
    </Footer>
  );
}

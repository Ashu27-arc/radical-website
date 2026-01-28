import { importantLinks, mbbsAbroad, mbbsIndia, quickLinks } from '@/data/footerMenus';
import Link from 'next/link';
import { Image } from 'primereact/image';
import { Menu } from 'primereact/menu';

export default function Footer() {
  return (
    <footer className="footer">
      <div className='py-16 bg-[#DFF1FF]'>
        <div className="container lg:px-3 pl-3">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-[#4A4A4A]'>

            <div>
              <Link href="/" className="">
                <Image src="/logo.webp" alt="Logo" width="180" />
              </Link>
              <div className="text-sm my-6 pb-6 border-b border-[#0B2E3C]">
                Invite your friends and unlock exclusive benefits—earn more with every successful referral. Invite your friends and unlock exclusive benefits—earn more with every successful referral.
              </div>
              <div className='flex items-center gap-4 mb-8'>
                <div>
                  <Image src='/images/iso.webp' alt='ISO' width='60' height='60' />
                </div>
                <div className='text-xs text-[#0B2E3C] leading-3'>Radical Education<br />is an <span className='text-sm font-semibold'>ISO 9001:2015</span><br />certified company</div>
              </div>
              <div className='flex items-center gap-4 text-[#005A8B]'>
                <Link target='_blank' href="https://twitter.com/Radical_Edu_"><i className='pi pi-twitter'></i></Link>
                <Link target='_blank' href="https://www.facebook.com/profile.php?id=61556350017734"><i className='pi pi-facebook'></i></Link>
                <Link target='_blank' href="https://www.instagram.com/radicaleducationofficial/"><i className='pi pi-instagram'></i></Link>
                <Link target='_blank' href="https://www.linkedin.com/company/radical-education-official/about/?viewAsMember=true"><i className='pi pi-linkedin'></i></Link>
                <Link target='_blank' href="https://whatsapp.com/channel/0029Vajjreq0G0Xmr5ILp81P"><i className='pi pi-whatsapp'></i></Link>
                <Link target='_blank' href="https://t.me/radicaleducation"><i className='pi pi-telegram'></i></Link>
                <Link target='_blank' href="https://www.youtube.com/@radicaleducationofficial"><i className='pi pi-youtube'></i></Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-black mb-3">Quick Links</h4>
              <ul className="space-y-3 mb-6">
                {importantLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url || '#'}
                      className="flex items-center gap-1 text-sm transition text-nowrap"
                    >
                      <i className={item.icon || 'pi pi-angle-right'} />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h4 className="font-semibold text-black mb-3">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <i className="pi pi-phone" />
                  +91 97 97 97 2465
                </li>
                <li className="flex items-center gap-2">
                  <i className="pi pi-envelope" />
                  info@radicaleducation.in
                </li>
                <li className="flex items-start gap-2">
                  <i className="pi pi-map-marker mt-1" />
                  <span>
                    C-56/30, 3rd Floor, Sector-62<br />
                    Noida, Uttar Pradesh
                  </span>
                </li>
              </ul>
            </div>

            <div className='lg:pl-20'>
              <h4 className="font-semibold text-black mb-3">Quick Links</h4>
              <ul className="space-y-3 mb-6">
                {quickLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url || '#'}
                      className="flex items-center gap-1 text-sm transition"
                    >
                      <i className={item.icon || 'pi pi-angle-right'} />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h4 className="font-semibold text-black mb-3">MBBS Abroad</h4>
              <ul className="space-y-3">
                {mbbsAbroad.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url || '#'}
                      className="flex items-center gap-1 text-sm transition"
                    >
                      <i className={item.icon || 'pi pi-angle-right'} />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='lg:pl-20'>
              <h4 className="font-semibold text-black mb-3">MBBS India</h4>
              <ul className="space-y-3">
                {mbbsIndia.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url || '#'}
                      className="flex items-center gap-1 text-sm transition"
                    >
                      <i className={item.icon || 'pi pi-angle-right'} />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
      <div className="text-white text-center py-6 text-sm bg-[#005A8B]">
        © {new Date().getFullYear()} Radical Education | BINARAMA. All rights reserved.
      </div>
    </footer>
  );
}


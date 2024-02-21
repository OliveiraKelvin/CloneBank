import Image from "next/image"
import { Container } from "./Container"

import PhoneIcon from '@/assets/icon-phone.svg'
import Soluction from '@/assets/icon-solutions.svg'
import Option from '@/assets/icon-options.svg'
import Card from '@/assets/icon-card.svg'

import ImagePhone from '@/assets/phone.png'

export const SectionServices = () => {
    return (
        <section className="relative bg-white w-full h-[965px]">
            <Container>
                <div className="flex-1 max-w-[594px] pt-32">
                    <span className="block text-primary-orange text-sm font-bold uppercase mb-6">Serviços exclusivos</span>
                    <h2 className="text-primary-gray text-[56px] font-bold leading-tight">gerencie suas finanças sem sair de casa</h2>
                    <p className="text-lg max-w-[554px] mb-16 text-second-gray">Veja com você pode cuidar de seus finanças pelo App Itaú,
                        de forma segura, rápida e o melhor, sem sair de casa.
                    </p>
                    <ul className="flex flex-col items-start gap-9">
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                           <div className="w-7 h-7 items-center justify-center">
                              <Image 
                               src={PhoneIcon}
                               alt="Phone Icon"
                            />
                           </div>
                            <p className="flex-1 text-txt-gray text-sm">Acompanhar suas contas, fazer transferencias e pagamentos de onde estiver.</p>
                        </li>

                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                           <div className="w-7 h-7 items-center justify-center">
                              <Image 
                               src={Soluction}
                               alt="Soluctions"
                            />
                           </div>
                            <p className="flex-1 text-txt-gray text-sm">Acompanhar suas contas, fazer transferencias e pagamentos de onde estiver.</p>
                        </li>

                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                           <div className="w-7 h-7 items-center justify-center">
                              <Image 
                               src={Option}
                               alt="Option"
                            />
                           </div>
                            <p className="flex-1 text-txt-gray text-sm">Acompanhar suas contas, fazer transferencias e pagamentos de onde estiver.</p>
                        </li>

                        <li className="flex items-center gap-9 pb-9">
                           <div className="w-7 h-7 items-center justify-center">
                              <Image 
                               src={Card}
                               alt="Cards"
                            />
                           </div>
                            <p className="flex-1 text-txt-gray text-sm">Acompanhar suas contas, fazer transferencias e pagamentos de onde estiver.</p>
                        </li>
                    </ul>
                </div>
            </Container>
            <div className="absolute flex items-center top-0 right-0 w-[32%] bg-gray-phone h-full">
                <Image className="translate-x-[-50%]"
                src={ImagePhone}
                alt="Phone"
                />
            </div>
        </section>
    )
}
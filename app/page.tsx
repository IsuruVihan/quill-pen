import {JSX} from "react";

import Image from "next/image";
import Link from "next/link";

import Welcome from "@/public/welcome.png";

export default function Home(): JSX.Element {
  return (
    <main>
      <section className="px-5 md:px-12 lg:px-16 2xl:px-44 border-b-1 border-solid border-b-black bg-amber-400
      flex flex-row justify-between">
        <div className="w-fit pt-36 sm:w-500px lg:w-550px">
          <h2 className="font-medium text-7xl text-85px lg:text-106px font-PTSerif tracking-tighter">
            Stay curious.
          </h2>
          <h2 className="w-fit pt-12 md:pt-12 lg:pt-9 pb-10 text-2xl font-semibold leading-6">
            Discover stories, thinking, and expertise from writers on any topic.
          </h2>
          <div className="w-fit p-2 px-12 mb-24 rounded-full bg-black text-white text-xl">
            <Link href={"/"}>
              Start reading
            </Link>
          </div>
        </div>
        <div className="md:w-1/4 lg:w-1/3 hidden md:block my-auto">
          <Image src={Welcome} className="w-fit" alt={"Welcome!"}/>
        </div>
      </section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis mauris eros, vel faucibus dolor auctor
        nec. Donec eleifend lacus finibus malesuada fermentum. Nullam turpis dui, convallis et justo id, efficitur
        vestibulum velit. Donec fermentum, urna eget efficitur cursus, odio orci eleifend sapien, vel scelerisque sapien
        sapien consequat justo. Fusce a laoreet metus. Nunc sollicitudin ullamcorper lorem vel efficitur. Aliquam
        tincidunt aliquet blandit. Fusce imperdiet et magna eu varius. Donec id nulla ac tellus hendrerit sagittis.
        Nullam augue ipsum, interdum non enim sit amet, dapibus aliquam lacus.
        <br/><br/><br/><br/><br/>
        Praesent mattis porttitor magna, sit amet mollis nisi luctus ac. Donec nec fringilla ante, eget sollicitudin
        arcu. Praesent ut volutpat nulla. Vestibulum convallis sollicitudin lacus nec ultricies. Aliquam erat volutpat.
        Morbi sed semper magna. Quisque venenatis turpis sit amet arcu porttitor, id fringilla metus convallis. Nam
        ornare id velit sed mollis. Donec magna elit, tristique eu sem nec, sollicitudin vulputate sem. Ut sagittis
        velit tortor, a placerat ipsum venenatis at. Ut consectetur erat a porta faucibus.
        <br/><br/><br/><br/><br/>
        Praesent dapibus mauris libero, non blandit arcu maximus eleifend. Integer sed pretium lectus, eget porta felis.
        Mauris non felis in neque aliquam consectetur at ac metus. In fermentum, augue ut rhoncus imperdiet, ipsum enim
        semper ex, nec consequat dui nunc sed elit. Proin ornare ultricies felis id egestas. Vivamus blandit eleifend
        consequat. Nam laoreet tincidunt fringilla. Aliquam ultricies arcu ac lorem pretium, sit amet aliquam felis
        congue. Morbi id mattis nulla, vitae porttitor nunc. Aliquam non ante sapien.
        <br/><br/><br/><br/><br/>
        Curabitur sed orci odio. Mauris hendrerit tellus dolor, ac lobortis urna ultrices eu. Proin accumsan venenatis
        nulla, eget aliquet lacus laoreet eget. In venenatis tortor fermentum nisl mattis condimentum. Nunc pellentesque
        augue ut lectus tempor, id viverra eros accumsan. Aenean porta, mi vitae bibendum facilisis, quam felis rhoncus
        risus, sit amet pellentesque purus mi at nibh. Morbi eget sapien a felis laoreet iaculis. Donec tincidunt
        faucibus est a malesuada. Aliquam vitae mauris metus. Phasellus molestie ligula ut velit dignissim pharetra.
        Nunc non dictum nisi, non iaculis massa. Aenean dapibus, est id blandit rhoncus, metus leo placerat dolor, in
        semper elit risus id nunc. Integer blandit ligula dolor, eget blandit est tempor ut.
        <br/><br/><br/><br/><br/>
        Sed a ultricies mauris, eget aliquet libero. Maecenas erat leo, scelerisque a odio eget, ullamcorper suscipit
        ligula. Phasellus venenatis dictum arcu, sed molestie turpis accumsan sed. Mauris in nulla eget magna lobortis
        gravida non a orci. Donec vitae velit turpis. Praesent ut felis sed turpis euismod ullamcorper. Nullam quis mi
        et urna maximus porta. Donec lobortis sit amet diam et posuere. Suspendisse non tortor dolor. Fusce tincidunt
        sed ante ac ornare. Curabitur efficitur massa id lectus cursus hendrerit. Nulla eget nibh ac justo interdum
        tempus a ac eros.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis mauris eros, vel faucibus dolor auctor
        nec. Donec eleifend lacus finibus malesuada fermentum. Nullam turpis dui, convallis et justo id, efficitur
        vestibulum velit. Donec fermentum, urna eget efficitur cursus, odio orci eleifend sapien, vel scelerisque sapien
        sapien consequat justo. Fusce a laoreet metus. Nunc sollicitudin ullamcorper lorem vel efficitur. Aliquam
        tincidunt aliquet blandit. Fusce imperdiet et magna eu varius. Donec id nulla ac tellus hendrerit sagittis.
        Nullam augue ipsum, interdum non enim sit amet, dapibus aliquam lacus.
        <br/><br/><br/><br/><br/>
        Praesent mattis porttitor magna, sit amet mollis nisi luctus ac. Donec nec fringilla ante, eget sollicitudin
        arcu. Praesent ut volutpat nulla. Vestibulum convallis sollicitudin lacus nec ultricies. Aliquam erat volutpat.
        Morbi sed semper magna. Quisque venenatis turpis sit amet arcu porttitor, id fringilla metus convallis. Nam
        ornare id velit sed mollis. Donec magna elit, tristique eu sem nec, sollicitudin vulputate sem. Ut sagittis
        velit tortor, a placerat ipsum venenatis at. Ut consectetur erat a porta faucibus.
        <br/><br/><br/><br/><br/>
        Praesent dapibus mauris libero, non blandit arcu maximus eleifend. Integer sed pretium lectus, eget porta felis.
        Mauris non felis in neque aliquam consectetur at ac metus. In fermentum, augue ut rhoncus imperdiet, ipsum enim
        semper ex, nec consequat dui nunc sed elit. Proin ornare ultricies felis id egestas. Vivamus blandit eleifend
        consequat. Nam laoreet tincidunt fringilla. Aliquam ultricies arcu ac lorem pretium, sit amet aliquam felis
        congue. Morbi id mattis nulla, vitae porttitor nunc. Aliquam non ante sapien.
        <br/><br/><br/><br/><br/>
        Curabitur sed orci odio. Mauris hendrerit tellus dolor, ac lobortis urna ultrices eu. Proin accumsan venenatis
        nulla, eget aliquet lacus laoreet eget. In venenatis tortor fermentum nisl mattis condimentum. Nunc pellentesque
        augue ut lectus tempor, id viverra eros accumsan. Aenean porta, mi vitae bibendum facilisis, quam felis rhoncus
        risus, sit amet pellentesque purus mi at nibh. Morbi eget sapien a felis laoreet iaculis. Donec tincidunt
        faucibus est a malesuada. Aliquam vitae mauris metus. Phasellus molestie ligula ut velit dignissim pharetra.
        Nunc non dictum nisi, non iaculis massa. Aenean dapibus, est id blandit rhoncus, metus leo placerat dolor, in
        semper elit risus id nunc. Integer blandit ligula dolor, eget blandit est tempor ut.
        <br/><br/><br/><br/><br/>
        Sed a ultricies mauris, eget aliquet libero. Maecenas erat leo, scelerisque a odio eget, ullamcorper suscipit
        ligula. Phasellus venenatis dictum arcu, sed molestie turpis accumsan sed. Mauris in nulla eget magna lobortis
        gravida non a orci. Donec vitae velit turpis. Praesent ut felis sed turpis euismod ullamcorper. Nullam quis mi
        et urna maximus porta. Donec lobortis sit amet diam et posuere. Suspendisse non tortor dolor. Fusce tincidunt
        sed ante ac ornare. Curabitur efficitur massa id lectus cursus hendrerit. Nulla eget nibh ac justo interdum
        tempus a ac eros.
      </p>
    </main>
  );
}

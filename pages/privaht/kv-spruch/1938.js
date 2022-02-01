/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
  { name: 'KV Sprüche', href: '/privaht', current: true },
  { name: 'Liederbuch', href: '/lb.pdf', current: true },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white border-b border-gray-200">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center">
                      <h1 className="font-extrabold text-3xl tracking-widest">
                        Kerweborsch
                      </h1>
                    </div>
                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                      {navigation.map((item) => (
                        <Link href={item.href}>
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'border-red-500 text-gray-900'
                                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                              'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="-mr-2 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-red-50 border-red-500 text-red-700'
                          : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                        'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="py-10">
          <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-bold leading-tight text-gray-900 text-center">
                KV Spruch 1938
              </h1>
            </div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-16 max-w-prose prose  mx-auto text-xl px-4">
              <p>
                Wie die Wolken ziehn, so zieht die Zeit, <br />
                schun wirrer es Kerb, er liewe Leit.
                <br />
                Vor 14 Tage wollte mer all verzage,
                <br />
                wegen der angespannten politischen Lage.*
                <br />
                Aber jetzt ist überstanden die schwere Krise, <br />
                drum wolle mer die Kinsteerer Kerb <br />
                so richtig genieße.
              </p>
              <p>
                Die Gret, die hippt im Hemd erum **
                <br />
                un fängt sich noch en Floh,
                <br />
                vergnügt ruft sie erm Hannes zu: <br />
                "Die Kinsteerer Kerb es do!"
              </p>
              <p>
                Bei unserm Kerwewert, der Familie Reinheimer, <br />
                es fer die Kerb bestens gesorgt, <br />
                sie hon alles fer de Hunger, <br />
                sowie aach fer de Dorscht.
              </p>
              <p>
                Meu Kehl es so trocken, <br />
                drum Kellner schenk mol eu, <br />
                hoch lewe die Kerb, <br />
                die Kinsteerer Kerb soll - UNSER SEU !!! <br />
              </p>
              <p>
                Unser Kinsteerer Kerwemädcher <br />
                hon all neie Klader, <br />
                un die Kerwelocke seun aach nooch de neiste Mode; <br />
                gemoacht hon se de Schwarze, <br />
                de Geele un de Rote. *** <br />
              </p>
              <p>
                Mit dem Omnibus fahrn <br />
                es aach so e Vergnüge, <br />
                do koann mer debei ganz schee <br />
                oa uff die Finger kriege. <br />
                Des mußt erfahrn en Ehemann, <br />
                der seu Finger net bei sich losse koann. <br />
                Doch des Mädche segt: Mach mer koa Dinger, <br />
                un schlegt em uff seu Fuschelfinger. <br />
              </p>
              <p>
                In der Straße der SA **** <br />
                steht oan eme Tor oft e Fraa, <br />
                sie tut so gern lache un aach viel verzehle. <br />
                Vor lauter Gebabbel tut se doann fast vergesse, <br />
                daß er Familie kimmt um 12 Uhr zum Mittagesse. <br />
              </p>
              <p>
                In de Naumer Gass geht fast jeden Owend oaner <br />
                uff un ab un träumt so vor sich hie, <br />
                an jedes Beemsche spuckt er mol, <br />
                damit se bleiwe aach im Winter grie. <br />
              </p>
              <p>
                In de Hinnergass, do wohnt so en Wetterprophet, <br />
                der waas goanz genaa, wie es mit em Wetter steht. <br />
                Woann der ofängt so singe un so peife, <br />
                do waas die goanz Nochberschaft, <br />
                entwerrer es gibt Reje oder es fängt o so schneie. <br />
              </p>
              <p>
                E paar Heiser weirer leit en Mann krank im Bett, <br />
                der hot Bauchweh, ach du lieber Schreck. <br />
                Doch als die Fraa zum Eukaafe dut geh, <br />
                muß es Dienstmädche als Pflegerin <br />
                behandeln das Wehweh. <br />
                E Wärmflsch muß se em uff de Bauch druff lege, <br />
                das kam dem Manne sehr gelege. <br />
                Er klagt dann weiter laut: "Oh weh, oh weh, <br />
                e Stickche weirer unne tut's aach noch weh." <br />
              </p>
              <p>
                Des wars, was me heit wolle berichte, <br />
                vun de Kinsteerer Ortsgeschichte. <br />
                Es es ja im Örtche noch viel mehr passiert, <br />
                awwer mer hon fer dies Joar genug glossiert. <br />
              </p>
              <p>
                Uff em Bismarckplatz es aach viel los, <br />
                Zuckerständ, Schießbude, Schiffschaukel, Reitschul, <br />
                für Klein un Groß.
              </p>
              <p>
                Unser Kapell, de Friese Karl vun Bischem, <br />
                er es jo bekannt in Stadt un Land, <br />
                der schlägt jetzt mol kräftig uff die Trummel, un <br />
                los geht's zum Kerwerummel !
              </p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

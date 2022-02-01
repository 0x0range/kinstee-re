/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link';

const people = [
  {
    name: '-',
    year: 1938,
    pdf: false,
    text: true,
  },
  {
    name: '-',
    year: 1978,
    pdf: true,
    text: false,
  },
  {
    name: '-',
    year: 1981,
    pdf: true,
  },
  {
    name: '-',
    year: 1982,
    pdf: true,
  },
  {
    name: '-',
    year: 1983,
    pdf: true,
  },
  {
    name: '-',
    year: 1985,
    pdf: true,
    text: false,
  },
  {
    name: '-',
    year: 1984,
    pdf: true,
    text: false,
  },
  {
    name: '-',
    year: 1986,
    pdf: true,
    text: false,
  },
  {
    name: 'Berthold Stephan',
    year: 1987,
    pdf: true,
    text: false,
  },
  {
    name: 'Gerd Mischlich',
    year: 1988,
    pdf: true,
    text: false,
  },
  {
    name: 'Dieter Hill',
    year: 1989,
    pdf: true,
    text: false,
  },
  {
    name: 'Jörg Fückel',
    year: 1991,
    pdf: true,
    text: false,
  },
  {
    name: 'Gösta Schöner',
    year: 1993,
    pdf: true,
    text: false,
  },
  {
    name: '-',
    year: 1956,
    pdf: true,
    text: false,
  },
  {
    name: 'Jörg Rothenstein',
    year: 1990,
    pdf: true,
    text: false,
  },
];

export default function Table() {
  const sorted = people.sort((a, b) => b.year - a.year);
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Kerwevadder
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Aktion
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((person, personIdx) => (
                  <tr
                    key={person.email}
                    className={personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {person.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.year}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.text ? (
                        <Link href={`/privaht/kv-spruch/${person.year}`}>
                          <a className="text-indigo-600 hover:text-indigo-900">
                            Öffnen
                          </a>
                        </Link>
                      ) : (
                        <span>Kein Text</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {person.pdf ? (
                        <Link href={`/kvs-pdf/${person.year}.pdf`}>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            PDF
                          </a>
                        </Link>
                      ) : (
                        <span>Keine PDF</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

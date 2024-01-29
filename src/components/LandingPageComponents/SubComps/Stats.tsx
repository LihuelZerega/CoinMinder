const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
    { id: 2, name: 'Assets under holding', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
    { id: 4, name: 'New users annually', value: '46,000' },

  ]
  
  export default function Stats() {
    return (
      <div className="py-6 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900 mb-10">
          Trusted by the world’s most innovative teams
        </h2>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center md:grid-cols-2 xl:grid-cols-4 ">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  
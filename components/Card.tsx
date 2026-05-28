
type CardProps = {
        title: string;
        value: string;
    }

export default function Card({title, value} : CardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200">
        <h2 className="font-bold text-gray-600 text-sm uppercase tracking-wide">{title}</h2>
        <p className="text-3xl font-bold mt-4 text-gray-900">{value}</p>
    </div>
  )
}
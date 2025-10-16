interface CardProps {
  title: string;
  description: string;
  image: {
    url: string;
  };
  date: string;
  status: string;
}

export default function Card({ title, description, image, date, status }: CardProps) {
  return (
    <div className="max-w-sm mx-auto bg-[#1a1a1a] border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <img
        src={image.url}
        alt="Preview image"
        className="w-full h-48 object-cover opacity-90 hover:opacity-100 transition-opacity"
      />

      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-100 mb-2">
          {title}
        </h2>

        <p className="text-gray-400 text-sm mb-4">
          {description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>📅 {date}</span>
          <span className="font-medium text-gray-300">Status: {status.charAt(0).toUpperCase() + status.slice(1)}</span>
        </div>
      </div>
    </div>
  );
}

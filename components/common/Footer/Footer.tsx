const Footer = () => {
  return (
    <footer className="bg-black pt-1">
      <div className="container mx-auto px-6">
        <div className="mt-5 flex flex-col items-center">
          <div className="py-6">
            <p className="mb-6 test-sm text-pimary-2 font-bold text-white">
              &copy; {new Date().getFullYear()} Изи
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
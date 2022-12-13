interface LayoutProps {
  children: React.ReactNode
}

export default function Layout (props: LayoutProps) {
  return (
    <div
      className={'flex justify-center items-center h-screen bg-gradientBackground text-white'}
    >
      <div className="p-6">{props.children}</div>
    </div>
  )
}

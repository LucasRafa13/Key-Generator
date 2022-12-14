interface LayoutProps {
	children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
	return (
		<div className={'h-screen bg-gradientBackground text-white w-screen p-4'}>
			{props.children}
		</div>
	)
}

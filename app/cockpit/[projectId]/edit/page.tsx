export default function CockpitEditPage({params}: {params: { projectId: string }}) {
  return (

  <div className="flex flex-col items-stretch">
    <div className="h-16 bg-primary-600">
      TOOLBAR
    </div>
    <div className="flex-1 p-4">
      {params.projectId}
    </div>
  </div>
  )
}

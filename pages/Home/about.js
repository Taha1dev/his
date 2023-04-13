export default function About() {
  const breadcrumbs = useBreadcrumbs();

  return (
    <div>
      {breadcrumbs.map(({ breadcrumb, pathname }) => (
        <span key={pathname}>
          <Link href={pathname}>{breadcrumb}</Link>
          <span>/</span>
        </span>
      ))}
      <h1>About us</h1>
      <p>We are a company that specializes in...</p>
    </div>
  );
}
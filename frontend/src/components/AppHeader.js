import { PageHeader } from "antd";
import { useNavigate } from "react-router-dom";
export default function AppHeader() {
  const navigate= useNavigate()
  return (
    <PageHeader
      className="site-page-header"
      onBack={() => navigate(-1)}
      title="My Notes"
      subTitle="A Simple Note taking app"
    />
  );
}

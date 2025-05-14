/** @format */

import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProjectById } from "../../api/ProjectAPI";
import EditProjectForms from "../../components/proyects/EditProjectForms";

const EditProjectView = () => {
  const params = useParams();
  const projectId = params.projectId!;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["editProject", projectId],
    queryFn: () => getProjectById(projectId),
    retry: false,
  });

  if (isLoading) return "cargando...";
  if (isError) return <Navigate to="/404" />;

  if (data) return <EditProjectForms data={data} projectId={projectId} />;
};

export default EditProjectView;

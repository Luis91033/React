/** @format */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TeamMember } from "../../types";
import { addUserProject } from "../../api/TeamAPI";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

/** @format */
type SearchResultProps = {
  user: TeamMember;
  reset: () => void;
};
const SearchResult = ({ user, reset }: SearchResultProps) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const params = useParams();
  const projectId = params.projectId!;

  const { mutate } = useMutation({
    mutationFn: addUserProject,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data);
      reset();
      queryClient.invalidateQueries({ queryKey: ["projectTeam", projectId] });
      navigate(location.pathname, { replace: true });
    },
  });

  const handleAddUserToProject = () => {
    const data = {
      projectId,
      id: user._id,
    };
    mutate(data);
  };
  return (
    <>
      <p className="mt-10 text-center font-bold">Resultado:</p>
      <div className="flex justify-between items-center">
        <p>{user.name}</p>
        <button
          className="text-purple-600 hover:bg-purple-100 py-3 font-bold cursor-pointer"
          onClick={handleAddUserToProject}
        >
          Agregar al proyecto
        </button>
      </div>
    </>
  );
};

export default SearchResult;

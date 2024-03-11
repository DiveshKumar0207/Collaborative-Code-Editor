// NOTE :
// A DIALOG MADE BY EDITTING 'headlessui/react' with 'material-tailwind'
// FORMIK AND YUP FOR STATE-MANAGEMENT AND VALIDATION of FORM

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import { Button, Input } from "@material-tailwind/react";
import { Formik, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import WorkspaceContext from "../../../../context/workspace/WorkspaceContext";

const validationSchema = Yup.object({
  filename: Yup.string()
    .min(1, "Minimum character length is 1")
    .required("File's name required"),
  file_extention: Yup.string().required("extention is required"),
});

interface Props {}

interface Values {
  filename: string;
  file_extention: string;
}

// ======================================================================================================

const AddFileForm: React.FC<Props> = () => {
  const workspaceContext = useContext(WorkspaceContext);
  if (!workspaceContext) {
    throw new Error(
      "WorkspaceContext or WorkspaceContextType is undefined. Make sure WorkspaceStates is a parent.",
    );
  }

  const { isAddNewFileModal, closeAddNewFileModal, handleAddFileTabs } =
    workspaceContext;

  const initialValues: Values = {
    filename: "",
    file_extention: "",
  };

  const handleFormSubmit = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>,
  ) => {
    // Handle  submission logic here()

    handleAddFileTabs(values);

    setSubmitting(false);
    closeAddNewFileModal();
  };

  return (
    <>
      {/* <div>
        <Button
          type="button"
          onClick={openAddNewFileModal}
          placeholder={undefined}
        >
          Add a note
        </Button>
      </div> */}

      <Transition appear show={isAddNewFileModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeAddNewFileModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {/* === title-start === */}
                  <div className="flex items-center justify-between">
                    <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">
                      {" "}
                      <p className="text-2xl font-semibold text-backgroundColor-dark">
                        Create a file{" "}
                      </p>
                    </Dialog.Title>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mr-3 h-5 w-5 cursor-pointer"
                      onClick={closeAddNewFileModal}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  {/* === title-end === */}
                  <div className="mt-3">
                    <p className="text-sm text-gray-500">
                      Add FileName and extentions of File.
                      <br />
                      {/* By default, tag = &quot;general&quot; */}
                    </p>
                  </div>

                  {/* form  */}
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleFormSubmit}
                  >
                    {({ handleSubmit, errors }) => (
                      <form onSubmit={handleSubmit} method="post">
                        <div className="mt-2">
                          <div className="grid gap-4">
                            <div></div>
                            <div>
                              <Field
                                as={Input}
                                label="FileName"
                                name="filename"
                              />
                              <div className=" flex h-6 items-center justify-end pr-2 text-sm text-errorColor-light">
                                <ErrorMessage name="filename" component="div" />
                              </div>
                            </div>

                            <div>
                              <Field
                                as={Input}
                                label={`File extention. Eg : '.cpp', '.html' `}
                                name="file_extention"
                              />
                              <div className=" flex h-6 items-center justify-end pr-2 text-sm text-errorColor-light">
                                <ErrorMessage
                                  name="file_extention"
                                  component="div"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 flex justify-end gap-4">
                          {/* material-tailwind button */}
                          <Button
                            variant="text"
                            color="red"
                            onClick={closeAddNewFileModal}
                            type="button"
                            placeholder={undefined}
                          >
                            Cancel
                          </Button>

                          <button
                            type="submit"
                            className={`inline-flex  justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm  font-medium text-blue-900 outline-none ring-2 ring-blue-500 ring-offset-1  hover:bg-blue-200  active:ring-offset-2  
                                           ${
                                             Object.keys(errors).length > 0
                                               ? "cursor-not-allowed opacity-70"
                                               : ""
                                           }`}
                            // if theres a error, button will be disabled
                            disabled={Object.keys(errors).length > 0}
                          >
                            Save Note!
                          </button>
                        </div>
                      </form>
                    )}
                  </Formik>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AddFileForm;

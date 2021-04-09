import Swal from 'sweetalert2'

function SwalDefaultError(error: any) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: error,
    confirmButtonText: 'Try Again',
  })
}
export default function (_context: any, inject: any) {
  inject('SwalDefaultError', SwalDefaultError)
  inject('Swal', Swal)
}

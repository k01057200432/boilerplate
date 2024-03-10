import { UserService } from "@/backend/service/UserService"



export async function GET(request: Request, { params: { id } }: { params: { id: number } }) {
    const service = await UserService.init()
    const list = await service.getUserById(id);
    return Response.json(list);
}

export async function POST(request: Request, { params: { id } }: { params: { id: number } }) {
    const service = await UserService.init()
    const user: { id: number | undefined, firstName: string; lastName: string; age: number; } = await request.json()
    const resultID = await service.save({ ...user, id })
    return new Response('', {
        status: 201,
        headers: new Headers({ Location: `/api/user/${resultID}` })
    })
}
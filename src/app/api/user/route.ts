import { UserService } from "@/backend/service/UserService"

export async function GET() {
    const service = await UserService.init()
    const list = await service.list()
    return Response.json(list);
}

export async function POST(request: Request) {
    const service = await UserService.init()
    const list: [] = await request.json()
    list.forEach(async ({ id, firstName, lastName, age }: { id: number | undefined; firstName: string; lastName: string; age: number; }, index: number) => {
        service.save({ id, firstName, lastName, age });
    });

    return new Response('', {
        status: 201,
        headers: new Headers({ Location: '/api/user' })
    })
}

import request from 'supertest';

import {app} from "../src/index";

describe("Test the server", () => {
    it("Catch all animals", async () => {
        const res = await request(app).get("/");
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
    });

    it("Catch all animals with query", async () => {
        const res = await request(app).get("/?q=dog");
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
    });
});
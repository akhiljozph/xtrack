import { Test, TestingModule } from "@nestjs/testing";
import { AppService } from "./app.service";

describe('AppController', () => {
    let appController: AppService;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            providers: [AppService],
        }).compile();

        appController = app.get<AppService>(AppService);
    });

    describe('root', () => {
        it('should return server health details', () => {
            expect(appController.getHealthDetails()).toBe('Don\'t panic! I\'m up and running.');
        });
    });
});